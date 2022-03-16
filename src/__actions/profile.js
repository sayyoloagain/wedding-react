import { IRequest, SERVER } from '../api';

export const profileActions = {
    changePassword,
    changePassword2,
    resetPassword,
    resetPasswordByAdmin,
    profileUpdate
};

function changePassword(oldpassword, newpassword) {
    console.log(typeof(newpassword));
    let _param = {
        oldPassword: oldpassword,
        newPassword: newpassword
    }
    console.log("_param",_param);
    return IRequest.Post(SERVER.API.AppUser.ChangePassword, _param)
}

function changePassword2(_param) {
    console.log((_param));
    return IRequest.Post(SERVER.API.AppUser.ChangePassword, _param)
}

function profileUpdate(_param) {
    console.log((_param));
    return IRequest.Post(SERVER.API.AppUser.profileUpdate, _param)
}

function resetPassword(id, newPassword) {
    return IRequest.Patch(SERVER.API.ResetPassword + '/' + id, { password: newPassword })
}
function resetPasswordByAdmin(id, newPassword) {
    return IRequest.Post(SERVER.API.resetPasswordByAdmin, { id: id, newPassword: newPassword })
}