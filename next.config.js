module.exports = {
  async redirects() {
    return [
      {
        source: '/posts/2020-08-21-my-dream-programming-language',
        destination:
          'https://www.hackdoor.io/articles/my-dream-programming-language-9864f1917bb5?utm_source=micheleriva.it',
        permanent: true,
      },
      {
        source: '/posts/2020-07-31-reviewing-the-worst-piece-of-code-ever',
        destination:
          'https://www.hackdoor.io/articles/reviewing-the-worst-piece-of-code-ever-2dd33ae21850?utm_source=micheleriva.it',
        permanent: true,
      },
      {
        source: '/posts/2020-07-27-introducing-omnixent',
        destination:
          'https://www.hackdoor.io/articles/introducing-omnixent-oss-project-ca7d283adc5d?utm_source=micheleriva.it',
        permanent: true,
      },
      {
        source: '/posts/2020-07-13-about-remote-working',
        destination:
          'https://www.hackdoor.io/articles/about-remote-working-b4103e0cf71b?utm_source=micheleriva.it',
        permanent: true,
      },
      {
        source: '/posts/2020-07-09-thoughts-about-programming-languages',
        destination:
          'https://www.hackdoor.io/articles/my-thoughts-about-programming-languages-c54968aa3d22?utm_source=micheleriva.it',
        permanent: true,
      },
      {
        source: '/posts/2020-07-08-the-frustration-of-self-taught-developer',
        destination:
          'https://www.hackdoor.io/articles/the-frustration-of-being-a-self-taught-developer-703be0d2d25f',
        permanent: true,
      },
    ];
  },
};
