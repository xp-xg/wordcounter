# Firebase Hosting Setup for Word Counter App

## Prerequisites

1. Install Firebase CLI if you haven't already:
```bash
npm install -g firebase-tools
```

2. Make sure your project builds successfully:
```bash
npm run build
```

## Setup Instructions

1. **Login to Firebase:**
```bash
firebase login
```

2. **Set your Firebase project:**
If you created a project in the Firebase Console, use:
```bash
firebase use your-actual-project-id
```

Or if you want to create a new project:
```bash
firebase projects:create
```

3. **Deploy to Firebase Hosting:**
```bash
firebase deploy --only hosting
```

## Configuration Files

This project includes:
- `firebase.json` - Hosting configuration
- `.firebaserc` - Project configuration

## Troubleshooting

If you encounter any issues:
1. Make sure you have a valid Firebase project set up in the Firebase Console
2. Verify that your `dist` folder contains the built application
3. Ensure the Firebase CLI is properly installed and updated

## After Deployment

Once deployed, Firebase will provide you with a URL where your application is hosted. It will look something like:
- `https://your-project-id.web.app`
- `https://your-project-id.firebaseapp.com`

Your word counter application will be accessible at this URL.