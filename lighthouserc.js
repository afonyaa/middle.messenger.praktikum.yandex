module.exports = {
  ci: {
    upload: {
      target: "temp-storage"
    },
    assert: {
      preset: 'lighthouse:no-pwa'
    }
  },
};
