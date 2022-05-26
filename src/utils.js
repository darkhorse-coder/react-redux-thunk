export const isUrl = (url_str) => {
  try {
    return Boolean(new URL(url_str));
  } catch (error) {
    return false;
  }
};

export const generateUrl = (api_domain, params) => {
  if (!isUrl(api_domain)) {
    alert("Please enter valid URL.");
    return null;
  }
  const url = new URL(api_domain);
  if (params && typeof params === "object") {
    Object.keys(params).map((key) => {
      const value = params[key];
      if (value) {
        if (typeof value === "string") {
          if (value.length > 0) {
            url.searchParams.append(`${key}`, value);
          }
        } else {
          url.searchParams.append(`${key}`, value);
        }
      }
    });
  }
  return url.href;
};
