================================================
  Manikanta's Travel Blog — AWS Static Website
================================================

PROJECT: Deploy Static Website on AWS
STUDENT: Manikanta Reddy

--------------------------------------
WEBSITE URLS (Fill in after deployment)
--------------------------------------

CloudFront Domain URL:
  https://d3u7vva3w35ne2.cloudfront.net

S3 Website Endpoint URL:
  http://manikanta-static-website.s3-website-us-east-1.amazonaws.com

--------------------------------------
FILES INCLUDED
--------------------------------------

website/
  index.html          — Main HTML page
  css/
    style.css         — All styles (responsive, animated)
  js/
    app.js            — Interactivity (navbar, modal, form, counters)
  img/
    hero.jpg          — Hero background image

--------------------------------------
AWS DEPLOYMENT STEPS
--------------------------------------

1. S3 BUCKET SETUP
   - Go to AWS Console → S3 → Create Bucket
   - Bucket name: manikanta-static-website (must be globally unique)
   - Region: us-east-1 (or your preferred region)
   - Uncheck "Block all public access" → Acknowledge
   - Create Bucket

2. ENABLE STATIC WEBSITE HOSTING
   - Open your bucket → Properties tab
   - Scroll to "Static website hosting" → Edit
   - Enable → Index document: index.html
   - Error document: index.html → Save

3. S3 BUCKET POLICY (IAM — Make Public)
   - Bucket → Permissions → Bucket Policy → Edit
   - Paste the following policy (replace BUCKET-NAME):

   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::BUCKET-NAME/*"
       }
     ]
   }

4. UPLOAD FILES
   - Bucket → Objects tab → Upload
   - Upload ALL files maintaining the folder structure:
     • index.html
     • css/style.css
     • js/app.js
     • img/hero.jpg

5. CLOUDFRONT DISTRIBUTION
   - AWS Console → CloudFront → Create Distribution
   - Origin domain: Select your S3 bucket website endpoint
     (use the S3 website endpoint, not the REST endpoint)
   - Viewer protocol policy: Redirect HTTP to HTTPS
   - Default root object: index.html
   - Create Distribution (takes ~15 minutes to deploy)
   - Copy the "Distribution domain name" (e.g., d1234abcd.cloudfront.net)

6. TEST YOUR WEBSITE
   - Visit your CloudFront URL in a browser
   - Visit your S3 website endpoint in a browser
   - Both should show the Travel Blog website

--------------------------------------
SCREENSHOTS TO TAKE (for submission)
--------------------------------------

✅ Screenshot 1: S3 bucket created (visible in AWS Console)
✅ Screenshot 2: All files uploaded in the S3 bucket
✅ Screenshot 3: Static website hosting enabled (Properties tab)
✅ Screenshot 4: Bucket policy set (Permissions tab)
✅ Screenshot 5: CloudFront distribution created (status: Enabled)
✅ Screenshot 6: Website open in browser via CloudFront URL
✅ Screenshot 7: Website open in browser via S3 endpoint URL

--------------------------------------
IMPORTANT REMINDER
--------------------------------------
After your project is graded and you receive a PASS:
→ Delete the CloudFront distribution
→ Empty and delete the S3 bucket

--------------------------------------
CONTACT
--------------------------------------
Name: Manikanta Reddy
Project: Udacity AWS Cloud Architect Nanodegree
Year: 2026
