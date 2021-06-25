/**
 * RequireAuth
 *
 * @param {Function} resolver - the resolver for decore
 *
 * @returns <Function> the resolver decorated
 */
function requireAuth(resolver) {
  return (parent, args, context, info) => {
    if (!context.user) return;

    return resolver(parent, args, context, info);
  };
}

/**
 * RequireRoles
 *
 * @param {String[]} roles - the enabled roles
 *
 * @returns <Function> the high order resolver
 */
function requireRoles(roles) {
  return (resolver) => {
    return (parent, args, context, info) => {
      if (
        !context.user ||
        !context.user.roleId ||
        !roles.includes(context.user.roleId)
      )
        return;

      return resolver(parent, args, context, info);
    };
  };
}

export {
  requireAuth, //
  requireRoles,
};
