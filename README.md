# Create a to-do list with S3!
AWS S3 Static Website To-Do List

This is just a project I made for fun.

Create a to-do list using Amazon S3!

<img width="996" alt="Screenshot 2024-02-08 at 12 11 59 AM" src="https://github.com/breezysupply/todo-static-website-s3/assets/104871054/5679cc9f-e644-4768-9eef-320ea0e0f831">

Follow these easy steps:

1. Login or sign-up for an AWS Account: https://aws.amazon.com/console/
2. Navigate to the S3 service
3. Create a bucket
4. Add the files in this repository: `index.html`, `script.js`, and `styles.css`.
5. Enable Static website hosting by going to the Properties tab, scrolling to the bottom, hit "Edit" on the `Static website hosting` section, Toggle `Enable`, ensure `Host a static website` is selected, under the `Index document` field, type `index.html`, and click the `Save Changes` button
6. Enable public access to the bucket to allow it others to view the website. To do this, navigate to the `Permissions` tab, click `Edit` to the right of the `Block public access (bucket settings` section, uncheck `Block all public access`, and save changes. Please do NOT include files or information that you do not want to be publicly available.
7. Create a bucket policy to allow public read access to your website. Under the `Permissions` tab, click the `Edit` button next to the `Bucket Policy` section.
   a. Include the following policy:
```
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "PublicReadGetObject",
			"Effect": "Allow",
			"Principal": "*",
			"Action": "s3:GetObject",
			"Resource": "arn:aws:s3:::<YOUR_BUCKET_NAME>/*"
		}
	]
}
```
Here's what the policy essentially means:
"Sid": "PublicReadGetObject"
This is an optional identifier for the statement (SID stands for "Statement ID"). It helps identify the purpose of the statement within the policy.

"Effect": "Allow"
This specifies the effect of the statement, which can be either "Allow" or "Deny". In this case, it allows the actions specified in the statement.

"Principal": "*"
This specifies the entity (or principal) to which the statement applies. The asterisk (*) wildcard represents all users, including anonymous users. This means the permissions granted by this statement apply to anyone accessing the bucket.

"Action": "s3:GetObject"
This specifies the action or actions allowed by the statement. In this case, it allows the "GetObject" action, which allows users to retrieve (download) objects from the bucket.

"Resource": "arn:aws:s3:::<YOUR_BUCKET_NAME>/*"
This specifies the resource or resources to which the statement applies. The ARN (Amazon Resource Name) format is used to identify the bucket and objects within it. <YOUR_BUCKET_NAME> should be replaced with the actual name of your bucket. The /* at the end indicates that the statement applies to all objects within the bucket.

7. Test access/view your To-Do list! Navigate back to your bucket, select the `index.html` file check box, and click the `Open` button and it'll open the webpage on a new tab. Enjoy your new to-do list! 
