export enum UserEvent {
  CREATE_USER = 'user.createUser',
  FIND_ALL_USER = 'user.findAllUser',
  FIND_ONE_USER = 'user.findOneUser',
  UPDATE_USER = 'user.updateUser',
  REMOVE_USER = 'user.removeUser',
}

export enum AuthEvent {
  SIGN_UP = 'auth.signup',
  SIGN_IN_WITH_EMAIL = 'auth.signInWithEmail',
}
