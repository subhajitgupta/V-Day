# EmailJS Template Setup Instructions

Your Valentine's invitation email is showing HTML code instead of rendering properly. Follow these steps to fix it:

## Steps to Fix:

### 1. Login to EmailJS
- Go to https://dashboard.emailjs.com/
- Login with your account

### 2. Navigate to Email Templates
- Click on "Email Templates" in the left sidebar
- Find your template with ID: `template_gy3eydt`

### 3. Update the Template

Replace your current template content with:

```
To: {{to_name}}
Subject: 💕 A Special Valentine's Invitation for You!

{{{message}}}
```

**Important:** Notice the **triple braces** `{{{message}}}` instead of double braces. This tells EmailJS to render HTML.

### 4. Template Settings
- Make sure "Content Type" is set to **"text/html"** or **"auto-detect"**
- If there's an HTML/Text toggle, select **HTML**

### 5. Save and Test
- Click "Save"
- Go back to your website and try sending the email again

## Alternative: Simplified Template

If the above doesn't work, use this simpler template structure:

**Template Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
</head>
<body>
    {{{message}}}
</body>
</html>
```

**Template Variables:**
- `to_email` - Recipient email
- `to_name` - Recipient name  
- `from_name` - Sender name
- `message` - The full HTML content (with triple braces)

## Testing

After updating the template:
1. Refresh your Valentine's website
2. Fill out the date planning form
3. Send a test email
4. Check your inbox - it should now display as a beautiful greeting card!

## Need Help?

If you're still seeing HTML code:
1. Check your email client's settings (Gmail, Outlook, etc.)
2. Try viewing in a different email client
3. Make sure images are enabled in your email client
4. Check the EmailJS template test feature to preview the rendering

---

Your Valentine invitation card will look stunning once this is set up correctly! 💕
