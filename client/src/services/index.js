export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/mediaShuffle`;

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};

export const metaAuth = {
  params: {
    raw: true,
    data: 'body/html'
  },
  headers: {
    Authorization: `Basic ${process.env.URL_META_KEY}`,
	},
  auth: {
		username: "heraaaa.cccc@gmail.com",
		password: "75L03LXFRNihl8qboTH2"
	}
};

export const metaURL = `https://api.urlmeta.org/`