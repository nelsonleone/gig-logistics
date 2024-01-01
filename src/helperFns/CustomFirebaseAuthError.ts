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
      default:
        return 'An error occurred during authentication.';
    }
}
 
export default customFirebaseError;