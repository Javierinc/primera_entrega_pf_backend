import { ADMIN } from "../users.js";

export function authAdmin(admin){
    const user = ADMIN.find(user => user.admin === admin);
    if(!user || user.admin != admin) return null;
    return user
}

