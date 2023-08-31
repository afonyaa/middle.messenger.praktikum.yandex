module.exports = {
  ci: {
    collect: {
      url: [
        'https://spontaneous-panda-71c00f.netlify.app/sign-in',
        'https://spontaneous-panda-71c00f.netlify.app/sign-up',
        'https://spontaneous-panda-71c00f.netlify.app/my-profile/preview',
      ],
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'csp-xss': 'off',
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:best-seo': ['error', { minScore: 0.95 }],
      },
    },
  },
};
