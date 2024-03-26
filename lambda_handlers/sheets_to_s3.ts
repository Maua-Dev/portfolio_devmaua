/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { google } from 'googleapis'
import { S3 } from 'aws-sdk'

export async function handler(event: any, context?: any) {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'google.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  const info = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID, // 1unR2SBIToOJpLivobXWJ9Hdxn89vVAAo8NdLS47k4CY
    range: 'A:K',
  })

  const data = info.data.values
  if (!data) {
    console.log('No data found.')
  }
  const jsonData = data!.map((row: any) => {
    const fields = row[5]?.split(' ')
    const course = fields?.slice(0, -1).join(' ')
    const year = fields[fields.length - 1]
    const tag = row[7] && row[7] !== '' && row[7] !== ' ' ? row[7].split(',').map((tag: string) => tag.trim()) : []
    const technologies = row[8] && row[8] !== '' && row[8] !== ' ' ? row[8].split(',').map((tech: string) => tech.trim()) : []
    return {
      name: row[1],
      birthday: row[2],
      ra: row[3],
      email_dev: row[4],
      course,
      year,
      photo: row[6],
      tag,
      technologies,
      linkedin: row[9],
      github: row[10],
    }
  })

  jsonData.shift()

  console.log('jsonData - [JSON REPOSITORY S3] - ', jsonData)

  const s3 = new S3({
    region: process.env.REGION,
  })

  const params: S3.PutObjectRequest = {
    Bucket: process.env.S3_BUCKET_NAME as string,
    Key: 'data.json',
    Body: JSON.stringify(jsonData),
    ContentType: 'application/json',
  }

  const resp = await s3.putObject(params).promise()

  console.log('resp - [JSON REPOSITORY S3] - ', resp)

  return jsonData
}
