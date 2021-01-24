export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/mediaShuffle`;

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};

export const metaAuth = {
  headers: {
    Authorization: `Basic ${process.env.URL_META_KEY}`,
    Cookie: '__cfduid=d1d94adc511d74fb39339c029b4f68f081611515128'
  },
  auth: `${process.env.auth}`
};

export const metaURL = `https://api.urlmeta.org/`
