const settings = {
  "name": "sample-project",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": 'sample-theme',
      "state": {
        "theme": {
          "menu" : [
            ["Home", "/"],
            ["Kwik", "/test-generated-home-page/"],
            ["Sample Page", "/sample-page/"],
            ["About Us", "/about-us/"],
          ]
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          // "url": "https://test.frontity.org",
          "url": "https://tlcgraduatecredits.com/kwik/",
          "postTypes": [
            {
              type: "destinations",
              endpoint: "destinations",
              archive: "/destinations"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
