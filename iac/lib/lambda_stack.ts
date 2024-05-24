import { Construct } from "constructs";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import path from "path";

export class LambdaStack extends Construct {
  constructor(scope: Construct, id: string, environments: { [key: string]: string }) {
    super(scope, id);

    // Lambda function
    const handler = new lambda.Function(this, 'MyFunction', {
      runtime: lambda.Runtime.NODEJS_20_X,
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda_handlers')),
      handler: 'sheets_to_s3.handler',
      environment: environments,
    });

    // Grant permissions to read/write to S3
    handler.addToRolePolicy(new PolicyStatement({
      actions: ['s3:PutObject', 's3:GetObject', 's3:GetObjectAcl', 's3:PutObjectAcl'],
      resources: [`arn:aws:s3:::${environments.S3_BUCKET_NAME}/*`],
    }));
  }
}