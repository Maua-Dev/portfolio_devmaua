import { Construct } from "constructs";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as rules from "aws-cdk-lib/aws-events";
import * as targets from "aws-cdk-lib/aws-events-targets";
import { Duration } from "aws-cdk-lib";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import * as path from "path";

export class LambdaStack extends Construct {
  lambdaLayer: lambda.LayerVersion;

  constructor(scope: Construct, id: string, environments: { [key: string]: string }) {
    super(scope, id);

    // Lambda function
    const handler = new NodejsFunction(this, 'PortfolioDevmauaLambdaSheetsToS3', {
      runtime: lambda.Runtime.NODEJS_20_X,
      entry: path.join(__dirname, '../../lambda_handlers/sheets_to_s3.ts'),
      handler: 'handler',
      environment: environments,
    });

    this.lambdaLayer = new lambda.LayerVersion(this, 'PortfolioDevmauaLambdaLayerGoogle', {
      code: lambda.Code.fromAsset(path.join(__dirname, '../../google.json')),
    })

    // Grant permissions to read/write to S3
    handler.addToRolePolicy(new PolicyStatement({
      actions: ['s3:PutObject', 's3:GetObject', 's3:GetObjectAcl', 's3:PutObjectAcl'],
      resources: [`arn:aws:s3:::${environments.S3_BUCKET_NAME}/*`],
    }));

    // Schedule event to trigger the lambda function daily
    const rule = new rules.Rule(this, 'Rule', {
      schedule: rules.Schedule.rate(Duration.minutes(1)),
    });

    rule.addTarget(new targets.LambdaFunction(handler));
  }
}