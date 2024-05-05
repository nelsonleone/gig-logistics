function customFirebaseError(errorCode:string) {
    switch (errorCode) {
      case 'auth/user-not-found':
        return 'User not found.';
       break;
      case 'auth/wrong-password':
        return 'Wrong Credentials.';
       break;
      case 'auth/email-already-in-use':
        return 'Email Already Exists.';
       break;
      case 'auth/internal-error':
        return 'Internal Error Authenticating User, Try again.';
       break;
      case 'auth/invalid-credential':
        return 'Invalid Credentials - Wrong Email Or password';
       break;
      case 'auth/too-many-requests':
        return 'Too many attempts - try again later';
       break;
      default:
        return 'An error occurred during authentication.';
    }
}
 
export default customFirebaseError;