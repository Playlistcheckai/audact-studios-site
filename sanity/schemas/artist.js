export default {
  name: 'artist',
  title: 'Artists',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Artist Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Artist Description',
      type: 'text',
    },
    {
      name: 'spotify',
      title: 'Spotify Profile Link',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Artist Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};
