# Admin Dashboard Setup Guide

## Creating Your First Admin User

To access the admin dashboard at `/admin`, you need to create an admin user in Supabase. Follow these steps:

### Option 1: Using Supabase Dashboard (Recommended)

1. **Go to your Supabase Project**
   - Visit https://supabase.com
   - Open your project: `eovvutfseeohiwotjllo`

2. **Navigate to Authentication**
   - Click on "Authentication" in the left sidebar
   - Click on "Users"

3. **Add New User**
   - Click the "Add User" button
   - Choose "Create new user"
   - Enter your email address
   - Enter a secure password
   - Click "Create User"

4. **Confirm Email (if required)**
   - Check your email for a confirmation link
   - Click the confirmation link
   - Your account is now active

5. **Login to Admin Dashboard**
   - Go to your website at `/admin`
   - Enter the email and password you just created
   - You'll be redirected to `/admin/dashboard`

### Option 2: Using Supabase SQL Editor

1. **Open SQL Editor**
   - Go to your Supabase project dashboard
   - Click on "SQL Editor" in the left sidebar

2. **Create User with SQL**
   ```sql
   -- This creates a user account
   -- Replace with your email and desired password
   INSERT INTO auth.users (
     instance_id,
     id,
     aud,
     role,
     email,
     encrypted_password,
     email_confirmed_at,
     confirmation_token,
     recovery_token,
     created_at,
     updated_at
   ) VALUES (
     '00000000-0000-0000-0000-000000000000',
     gen_random_uuid(),
     'authenticated',
     'authenticated',
     'your-email@example.com',
     crypt('your-secure-password', gen_salt('bf')),
     now(),
     '',
     '',
     now(),
     now()
   );
   ```

3. **Run the Query**
   - Click "Run" to execute
   - Your admin user is now created

4. **Login**
   - Visit `/admin`
   - Use the email and password from the SQL query

## Admin Dashboard Features

Once logged in, you can:

### Manage Projects
- **Add Projects** - Click "Add New Project"
  - Title
  - Description
  - Tech Stack (comma-separated)
  - Image URL
  - Live URL
  - GitHub URL (optional)

- **Edit Projects** - Click the "Edit" button on any project
- **Delete Projects** - Click the trash icon
- **Reorder Projects** - Projects are displayed by order_index

### Upload Images

For project images, you can:
1. Upload images to a service like:
   - Cloudinary
   - Imgur
   - AWS S3
   - Vercel Blob Storage
   - Or use direct links from your projects

2. Copy the image URL
3. Paste it in the "Image URL" field when adding/editing a project

### Best Practices

1. **Use descriptive titles** - Clear project names
2. **Write engaging descriptions** - Explain what the project does
3. **List all technologies** - Help visitors understand your tech stack
4. **Add working links** - Ensure live URLs and GitHub links work
5. **Use high-quality images** - Images should be at least 800x600px
6. **Keep it updated** - Regularly add new projects and remove old ones

## Troubleshooting

### Can't Login?
- Check that email confirmation is disabled in Supabase settings
- Verify your email and password are correct
- Check Supabase logs for authentication errors

### Projects Not Showing?
- Check that Row Level Security policies are enabled
- Verify projects exist in the database
- Check browser console for errors

### Image Not Loading?
- Verify the image URL is publicly accessible
- Check that the URL uses HTTPS
- Try opening the URL in a new tab to test

## Security Tips

1. **Use a strong password** - At least 12 characters with mixed case, numbers, and symbols
2. **Don't share credentials** - Keep your admin login private
3. **Enable 2FA if available** - Extra security layer
4. **Log out when done** - Click the "Logout" button
5. **Use HTTPS only** - Never enter credentials over HTTP

## Contact Support

If you need help:
- Email: Oluwasemiloregoodness@gmail.com
- WhatsApp: +234 805 971 2276

---

Happy Portfolio Building!
