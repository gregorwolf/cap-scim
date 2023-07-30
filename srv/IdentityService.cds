type Users {
    id         : UUID;
    userName   : String;
    givenName  : String;
    familyName : String;
    active     : Boolean;
    email      : String;
}

service IdentityService {

    action getUsers() returns array of Users;

}
