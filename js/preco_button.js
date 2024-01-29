//VINYLE PATCHWORD *******************************************
/*<![CDATA[*/
(function () {
	var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
	if (window.ShopifyBuy) {
	  if (window.ShopifyBuy.UI) {
		ShopifyBuyInit();
	  } else {
		loadScript();
	  }
	} else {
	  loadScript();
	}
	function loadScript() {
	  var script = document.createElement('script');
	  script.async = true;
	  script.src = scriptURL;
	  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
	  script.onload = ShopifyBuyInit;
	}
	function ShopifyBuyInit() {
	  var client = ShopifyBuy.buildClient({
		domain: 'christophe-vial.myshopify.com',
		storefrontAccessToken: '0a9f0692982b6ea56ecd106ce78b5ea3',
	  });
	  ShopifyBuy.UI.onReady(client).then(function (ui) {
		ui.createComponent('product', {
		  id: '8669731389765',
		  node: document.getElementById('product-component-1700484196017'),
		  moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
		  options: {
	"product": {
	  "styles": {
		"product": {
		  "@media (min-width: 601px)": {
			"max-width": "calc(25% - 20px)",
			"margin-left": "20px",
			"margin-bottom": "50px"
		  }
		},
		"title": {
		  "color": "#00665c"
		},
		"button": {
		  "font-weight": "bold",
		  "font-size": "13px",
		  "padding-top": "14.5px",
		  "padding-bottom": "14.5px",
		  "color": "#fff5f5",
		  ":hover": {
			"color": "#fff5f5",
			"background-color": "#00665c"
		  },
		  "background-color": "#f27e20",
		  ":focus": {
			"background-color": "#00665c"
		  },
		  "border-radius": "20px",
		  "padding-left": "100px",
		  "padding-right": "100px"
		},
		"quantityInput": {
		  "font-size": "13px",
		  "padding-top": "14.5px",
		  "padding-bottom": "14.5px"
		},
		"price": {
		  "color": "#00665c"
		},
		"compareAt": {
		  "color": "#00665c"
		},
		"unitPrice": {
		  "color": "#00665c"
		},
		"description": {
		  "font-size": "16px",
		  "color": "#f27e20"
		}
	  },
	  "buttonDestination": "checkout",
	  "text": {
		"button": "Pré commander / commander"
	  }
	},
	"productSet": {
	  "styles": {
		"products": {
		  "@media (min-width: 601px)": {
			"margin-left": "-20px"
		  }
		}
	  }
	},
	"modalProduct": {
	  "contents": {
		"img": false,
		"imgWithCarousel": true,
		"button": false,
		"buttonWithQuantity": true
	  },
	  "styles": {
		"product": {
		  "@media (min-width: 601px)": {
			"max-width": "100%",
			"margin-left": "0px",
			"margin-bottom": "0px"
		  }
		},
		"button": {
		  "font-weight": "bold",
		  "font-size": "13px",
		  "padding-top": "14.5px",
		  "padding-bottom": "14.5px",
		  "color": "#fff5f5",
		  ":hover": {
			"color": "#fff5f5",
			"background-color": "#00665c"
		  },
		  "background-color": "#00665c",
		  ":focus": {
			"background-color": "#00665c"
		  },
		  "border-radius": "20px",
		  "padding-left": "100px",
		  "padding-right": "100px"
		},
		"quantityInput": {
		  "font-size": "13px",
		  "padding-top": "14.5px",
		  "padding-bottom": "14.5px"
		},
		"title": {
		  "font-family": "Helvetica Neue, sans-serif",
		  "font-weight": "bold",
		  "font-size": "26px",
		  "color": "#4c4c4c"
		},
		"price": {
		  "font-family": "Helvetica Neue, sans-serif",
		  "font-weight": "normal",
		  "font-size": "18px",
		  "color": "#4c4c4c"
		},
		"compareAt": {
		  "font-family": "Helvetica Neue, sans-serif",
		  "font-weight": "normal",
		  "font-size": "15.299999999999999px",
		  "color": "#4c4c4c"
		},
		"unitPrice": {
		  "font-family": "Helvetica Neue, sans-serif",
		  "font-weight": "normal",
		  "font-size": "15.299999999999999px",
		  "color": "#4c4c4c"
		},
		"description": {
		  "font-family": "Helvetica Neue, sans-serif",
		  "font-weight": "normal",
		  "font-size": "14px",
		  "color": "#4c4c4c"
		}
	  },
	  "text": {
		"button": "Add to cart"
	  }
	},
	"option": {},
	"cart": {
	  "styles": {
		"button": {
		  "font-weight": "bold",
		  "font-size": "13px",
		  "padding-top": "14.5px",
		  "padding-bottom": "14.5px",
		  "color": "#fff5f5",
		  ":hover": {
			"color": "#fff5f5",
			"background-color": "#00665c"
		  },
		  "background-color": "#00665c",
		  ":focus": {
			"background-color": "#00665c"
		  },
		  "border-radius": "20px"
		}
	  },
	  "text": {
		"title": "Panier",
		"total": "Sous total",
		"empty": "Votre panier est vide",
		"notice": "Les codes de réduction sont ajoutés à la caisse.",
		"button": "Commander"
	  }
	},
	"toggle": {
	  "styles": {
		"toggle": {
		  "font-weight": "bold",
		  "background-color": "#00665c",
		  ":hover": {
			"background-color": "#00665c"
		  },
		  ":focus": {
			"background-color": "#00665c"
		  }
		},
		"count": {
		  "font-size": "13px",
		  "color": "#fff5f5",
		  ":hover": {
			"color": "#fff5f5"
		  }
		},
		"iconPath": {
		  "fill": "#fff5f5"
		}
	  }
	}
  },
		});
	  });
	}
  })();
  /*]]>*/

//CD PATCHWORD ***********************************************
/*<![CDATA[*/
(function () {
	var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
	if (window.ShopifyBuy) {
	  if (window.ShopifyBuy.UI) {
		ShopifyBuyInit();
	  } else {
		loadScript();
	  }
	} else {
	  loadScript();
	}
	function loadScript() {
	  var script = document.createElement('script');
	  script.async = true;
	  script.src = scriptURL;
	  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
	  script.onload = ShopifyBuyInit;
	}
	function ShopifyBuyInit() {
	  var client = ShopifyBuy.buildClient({
		domain: 'christophe-vial.myshopify.com',
		storefrontAccessToken: '0a9f0692982b6ea56ecd106ce78b5ea3',
	  });
	  ShopifyBuy.UI.onReady(client).then(function (ui) {
		ui.createComponent('product', {
		  id: '8669731356997',
		  node: document.getElementById('product-component-1700484237289'),
		  moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
		  options: {
	"product": {
	  "styles": {
		"product": {
		  "@media (min-width: 601px)": {
			"max-width": "calc(25% - 20px)",
			"margin-left": "20px",
			"margin-bottom": "50px"
		  }
		},
		"title": {
		  "color": "#00665c"
		},
		"button": {
		  "font-weight": "bold",
		  "font-size": "13px",
		  "padding-top": "14.5px",
		  "padding-bottom": "14.5px",
		  "color": "#fff5f5",
		  ":hover": {
			"color": "#fff5f5",
			"background-color": "#00665c"
		  },
		  "background-color": "#f27e20",
		  ":focus": {
			"background-color": "#00665c"
		  },
		  "border-radius": "20px",
		  "padding-left": "100px",
		  "padding-right": "100px"
		},
		"quantityInput": {
		  "font-size": "13px",
		  "padding-top": "14.5px",
		  "padding-bottom": "14.5px"
		},
		"price": {
		  "color": "#00665c"
		},
		"compareAt": {
		  "color": "#00665c"
		},
		"unitPrice": {
		  "color": "#00665c"
		},
		"description": {
		  "font-size": "16px",
		  "color": "#f27e20"
		}
	  },
	  "buttonDestination": "checkout",
	  "text": {
		"button": "Pré commander / commander"
	  }
	},
	"productSet": {
	  "styles": {
		"products": {
		  "@media (min-width: 601px)": {
			"margin-left": "-20px"
		  }
		}
	  }
	},
	"modalProduct": {
	  "contents": {
		"img": false,
		"imgWithCarousel": true,
		"button": false,
		"buttonWithQuantity": true
	  },
	  "styles": {
		"product": {
		  "@media (min-width: 601px)": {
			"max-width": "100%",
			"margin-left": "0px",
			"margin-bottom": "0px"
		  }
		},
		"button": {
		  "font-weight": "bold",
		  "font-size": "13px",
		  "padding-top": "14.5px",
		  "padding-bottom": "14.5px",
		  "color": "#fff5f5",
		  ":hover": {
			"color": "#fff5f5",
			"background-color": "#00665c"
		  },
		  "background-color": "#00665c",
		  ":focus": {
			"background-color": "#00665c"
		  },
		  "border-radius": "20px",
		  "padding-left": "100px",
		  "padding-right": "100px"
		},
		"quantityInput": {
		  "font-size": "13px",
		  "padding-top": "14.5px",
		  "padding-bottom": "14.5px"
		},
		"title": {
		  "font-family": "Helvetica Neue, sans-serif",
		  "font-weight": "bold",
		  "font-size": "26px",
		  "color": "#4c4c4c"
		},
		"price": {
		  "font-family": "Helvetica Neue, sans-serif",
		  "font-weight": "normal",
		  "font-size": "18px",
		  "color": "#4c4c4c"
		},
		"compareAt": {
		  "font-family": "Helvetica Neue, sans-serif",
		  "font-weight": "normal",
		  "font-size": "15.299999999999999px",
		  "color": "#4c4c4c"
		},
		"unitPrice": {
		  "font-family": "Helvetica Neue, sans-serif",
		  "font-weight": "normal",
		  "font-size": "15.299999999999999px",
		  "color": "#4c4c4c"
		},
		"description": {
		  "font-family": "Helvetica Neue, sans-serif",
		  "font-weight": "normal",
		  "font-size": "14px",
		  "color": "#4c4c4c"
		}
	  },
	  "text": {
		"button": "Add to cart"
	  }
	},
	"option": {},
	"cart": {
	  "styles": {
		"button": {
		  "font-weight": "bold",
		  "font-size": "13px",
		  "padding-top": "14.5px",
		  "padding-bottom": "14.5px",
		  "color": "#fff5f5",
		  ":hover": {
			"color": "#fff5f5",
			"background-color": "#00665c"
		  },
		  "background-color": "#00665c",
		  ":focus": {
			"background-color": "#00665c"
		  },
		  "border-radius": "20px"
		}
	  },
	  "text": {
		"title": "Panier",
		"total": "Sous total",
		"empty": "Votre panier est vide",
		"notice": "Les codes de réduction sont ajoutés à la caisse.",
		"button": "Commander"
	  }
	},
	"toggle": {
	  "styles": {
		"toggle": {
		  "font-weight": "bold",
		  "background-color": "#00665c",
		  ":hover": {
			"background-color": "#00665c"
		  },
		  ":focus": {
			"background-color": "#00665c"
		  }
		},
		"count": {
		  "font-size": "13px",
		  "color": "#fff5f5",
		  ":hover": {
			"color": "#fff5f5"
		  }
		},
		"iconPath": {
		  "fill": "#fff5f5"
		}
	  }
	}
  },
		});
	  });
	}
  })();
  /*]]>*/

//VINYLE PACHAMAMA *******************************************
/*<![CDATA[*/
(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'christophe-vial.myshopify.com',
        storefrontAccessToken: '0a9f0692982b6ea56ecd106ce78b5ea3',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '8642366177605',
          node: document.getElementById('product-component-1694421204489'),
          moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
          options: {
    "product": {
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
          }
        },
        "title": {
          "color": "#00665c"
        },
        "button": {
          "font-weight": "bold",
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#00665c"
          },
          "background-color": "#da711d",
          ":focus": {
            "background-color": "#00665c"
          },
          "border-radius": "20px",
          "padding-left": "100px",
          "padding-right": "100px"
        },
        "quantityInput": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        },
        "price": {
          "color": "#00665c"
        },
        "compareAt": {
          "color": "#00665c"
        },
        "unitPrice": {
          "color": "#00665c"
        },
        "description": {
          "font-size": "16px",
          "color": "#00665c"
        }
      },
      "buttonDestination": "checkout",
      "text": {
        "button": "Pré commander / commander"
      }
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    "modalProduct": {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          "font-weight": "bold",
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#da711d"
          },
          "background-color": "#f27e20",
          ":focus": {
            "background-color": "#da711d"
          },
          "border-radius": "20px",
          "padding-left": "100px",
          "padding-right": "100px"
        },
        "quantityInput": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        },
        "title": {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "bold",
          "font-size": "26px",
          "color": "#4c4c4c"
        },
        "price": {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "normal",
          "font-size": "18px",
          "color": "#4c4c4c"
        },
        "compareAt": {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "normal",
          "font-size": "15.299999999999999px",
          "color": "#4c4c4c"
        },
        "unitPrice": {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "normal",
          "font-size": "15.299999999999999px",
          "color": "#4c4c4c"
        },
        "description": {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "normal",
          "font-size": "14px",
          "color": "#4c4c4c"
        }
      },
      "text": {
        "button": "Add to cart"
      }
    },
    "option": {},
    "cart": {
      "styles": {
        "button": {
          "font-weight": "bold",
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#da711d"
          },
          "background-color": "#f27e20",
          ":focus": {
            "background-color": "#da711d"
          },
          "border-radius": "20px"
        }
      },
      "text": {
        "title": "Panier",
        "total": "Sous total",
        "empty": "Votre panier est vide",
        "notice": "Les codes de réduction sont ajoutés à la caisse.",
        "button": "Commander"
      }
    },
    "toggle": {
      "styles": {
        "toggle": {
          "font-weight": "bold",
          "background-color": "#f27e20",
          ":hover": {
            "background-color": "#da711d"
          },
          ":focus": {
            "background-color": "#da711d"
          }
        },
        "count": {
          "font-size": "13px"
        }
      }
    }
  },
        });
      });
    }
  })();
  /*]]>*/