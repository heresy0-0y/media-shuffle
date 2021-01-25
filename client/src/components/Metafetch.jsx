 // useEffect(() => {
  //   archive.map((media) => {
  //   if (media.fields.mediaType === 'article') {
  //   const queryURL = encodeURIComponent(media.fields.link);
  //   const url = `${metaURL}?url=${queryURL}`
  //   const getMeta = async () => {
  //     const resp = await axios.get(url, metaAuth);
  //     console.log(resp.data);
  //   };
  //   return getMeta();
  // }})}, [vibe, archive]);