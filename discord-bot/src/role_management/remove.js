const removeRole = (user, role) => {
    // Check if user exists
    if (!user) {
        console.error("User not found");
        return;
    }

    // Check if role exists
    if (!role) {
        console.error("Role not found");
        return;
    }

    // Check if user has the role
    if (!user.roles.cache.has(role.id)) {
        console.error("User does not have the specified role");
        return;
    }

    // Remove the role from the user
    user.roles.remove(role).then(() => {
        console.log(`Role ${role.name} removed from user ${user.username}`);
    }).catch(error => {
        console.error(`Error removing role: ${error.message}`);
    });
};

module.exports = { removeRole };