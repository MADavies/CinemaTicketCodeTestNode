export default class UserUtils {

    IsUserValid(accountId) {
        if(accountId > 0) {
            return true;
        }

        return false;
    }
}