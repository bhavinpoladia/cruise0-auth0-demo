# Cruise0 - Auth0 Enterprise Authentication Platform

## Project Overview

Cruise0 is a modern ReactJS single-page application that demonstrates enterprise-grade authentication capabilities using Auth0. Built as a proof-of-concept for Travel0's cruise booking platform modernization, this application showcases advanced security features, social login integration, and fraud prevention.

## Challenge Requirements

### Core Requirements

- **ReactJS SPA Integration**: Modern React application with Auth0 React SDK
- **Dual Authentication**: Email/password and Google social login
- **Email Verification**: Enforced verification with custom error handling
- **Universal Login Branding**: Custom cruise-themed login experience
- **Country Detection**: IP-based geolocation with metadata storage

### Enhanced Requirements

- **Email Verification Methods**: Multiple verification approaches implemented
- **Burner Email Blocking**: Auth0 Actions prevent disposable email signups
- **Conditional MFA**: Risk-based multi-factor authentication logic

### Extra Credit Features

- **Disposable Email Prevention**: Pre-registration blocking of burner domains
- **Social vs Database MFA**: Conditional MFA for non-social users only

## Architecture Overview

### Frontend

- **Framework**: React 18+ with hooks
- **Authentication**: Auth0 React SDK
- **Styling**: Inline styles with ocean theme

### Auth0 Configuration

- **Universal Login**: Custom branding with cruise theme
- **Connections**: Auth0 Database and Google OAuth 2.0
- **Actions Flow**: 5 custom Actions for security and intelligence

### Security Features

- Email Verification Enforcement
- Fraud Prevention (burner email blocking)
- Conditional MFA (database users only)
- Geolocation Intelligence
- Advanced Email Validation

## Auth0 Actions Flow

### Pre-User Registration Flow

1. **Block Burner Email Signups** - Prevents disposable email addresses

### Post-Login Flow

1. **Email Verification Enforcement** - Blocks unverified users
2. **Advanced Email Validation** - Additional domain/format checks
3. **Country Detection** - IP geolocation to user metadata
4. **Social vs Database MFA** - Conditional MFA logic
5. **Add Country Claims** - Metadata to ID token claims

## Prerequisites

- Node.js 16+ and npm
- Auth0 Account with tenant configured
- Google OAuth credentials
- Modern web browser

## Installation & Setup

### 1. Clone Repository

```bash
git clone [YOUR_GITHUB_REPO_URL]
cd cruise0-demo
npm install
```

### 2. Environment Configuration

**Copy the environment template:**

```bash
cp .env.local.example .env.local
```

**Edit `.env.local` with your actual Auth0 values:**

1. **Get values from Auth0 Dashboard → Applications → Your SPA → Settings**
2. **Replace placeholders in `.env.local`:**
   ```env
   REACT_APP_AUTH0_DOMAIN=your-actual-tenant.auth0.com
   REACT_APP_AUTH0_CLIENT_ID=your-actual-client-id
   REACT_APP_AUTH0_REDIRECT_URI=http://localhost:3000
   ```

**Note:** Never commit `.env.local` to Git - it contains your secrets and is protected by `.gitignore`

### 3. Auth0 Tenant Setup

#### Application Configuration

- Application Type: Single Page Application
- Allowed Callback URLs: `http://localhost:3000`
- Allowed Logout URLs: `http://localhost:3000`
- Allowed Web Origins: `http://localhost:3000`

#### Connections Setup

- Database Connection: Enable Auth0 Database with email verification
- Google Social: Configure Google OAuth 2.0 connection

#### Universal Login Branding

- Logo: Upload cruise ship logo
- Title: "Welcome Aboard"
- Description: "Log in to book your travel with Cruise0"
- Background: Cruise ship themed image
- Colors: Ocean blue theme

#### Actions Deployment

Deploy Actions in Pre-User Registration and Post-Login flows according to the sequence outlined above.

### 4. Run Application

```bash
npm start
```

Application will be available at `http://localhost:3000`

## Testing Guide

### Test Scenarios

#### 1. Landing Page

- Verify ocean blue background and professional design
- Check "Welcome to Cruise0" title and "Welcome Aboard" button

#### 2. Authentication Flow

- Google Login: Should skip MFA, direct to dashboard
- Email/Password: Should require MFA setup
- Universal Login: Should show custom cruise branding

#### 3. Email Verification

- New Account: Sign up with real email
- Verify blocked until email verified
- Click verification link, then login succeeds

#### 4. Fraud Prevention

- Burner Email: Try test@yopmail.com - Should be blocked
- Disposable: Try user@10minutemail.com - Should be blocked

#### 5. Country Detection

- Successful Login: Check user profile
- Verify country information displays from IP geolocation

#### 6. Conditional MFA

- Database User: Requires MFA setup
- Social User: Skips MFA requirement

## Troubleshooting

### Common Issues

**"Application Not Found"**

- Verify Auth0 domain and client ID in `.env.local`
- Check application configuration in Auth0 Dashboard
- Ensure SPA application type is selected (not Regular Web Application)

**"Email Verification Required"**

- Check email inbox including spam folder
- Verify email verification Action is deployed and active
- Ensure email verification is enabled in Database connection settings

**"MFA Setup Issues"**

- Ensure MFA is enabled in Auth0 tenant settings
- Check conditional MFA Action configuration
- Verify user is using database connection (email/password) not social login

**"Action_malformed" Error**

- Check Action code syntax - ensure proper JavaScript formatting
- Verify all brackets and parentheses are properly closed
- Make sure function is exported correctly: `exports.onExecutePostLogin = async (event, api) => {`
- Save draft and test Action before deploying

**"Access Denied" for Burner Emails**

- This is expected behavior - Pre-Registration Action is working correctly
- To test different domains, add them to the burner domains list in the Action
- Ensure Pre-Registration Action is deployed to "Pre User Registration" flow (not Post-Login)

**User Stuck at Email Verification**

- Delete test users from Auth0 Dashboard (User Management → Users)
- Clear browser cache and cookies
- Try with a real email address you can access
- Check that verification email links aren't being blocked by email security

**Syntax Errors in React App**

- Check for missing closing brackets or parentheses in JSX
- Ensure proper React component structure
- Verify all imports are correct
- Check browser console for specific error details

**Country Data Not Displaying**

- Verify Country Detection Action is deployed and active
- Check Add Country Claims Action is last in Post-Login flow
- Ensure custom claims namespace is exactly: `https://cruise0.app/`
- User may need to logout and login again after Action deployment

**Universal Login Styling Not Applied**

- Changes may take a few minutes to propagate
- Clear browser cache and try incognito mode
- Verify branding settings are saved in Auth0 Dashboard
- Check that custom domain is configured if using one

## Implementation Summary

This proof-of-concept demonstrates Auth0's capabilities for enterprise authentication modernization. The application implements all core requirements including ReactJS integration, dual authentication methods, email verification, custom branding, and country detection. Enhanced features include fraud prevention through burner email blocking and conditional MFA based on authentication method.

The solution provides a foundation for Travel0's cruise booking platform modernization with enterprise-grade security and user experience.
