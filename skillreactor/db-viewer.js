(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var __awaiter=this&&this.__awaiter||function(e,n,o,t){return new(o||(o=Promise))(function(s,i){function c(e){try{a(t.next(e))}catch(e){i(e)}}function r(e){try{a(t.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?s(e.value):(n=e.value,n instanceof o?n:new o(function(e){e(n)})).then(c,r)}a((t=t.apply(e,n||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const dynamodb_1=require("aws-sdk/clients/dynamodb"),Table=require("cli-table3"),TABLE_NAME=process.argv[2],ACCESS_KEY=process.argv[3],SECRET=process.argv[4];function getKeys(e){return e.reduce((e,n)=>(Object.keys(n).forEach(n=>!e.includes(n)&&e.push(n)),e),[])}function getRow(e,n){return e.map(e=>n[e]instanceof Object?JSON.stringify(n[e],null,3):n[e])}TABLE_NAME||(console.log("\nMissing Table Name\n"),process.exit()),ACCESS_KEY&&SECRET||(console.log("\nMissing AWS credentials\n"),process.exit()),(()=>__awaiter(void 0,void 0,void 0,function*(){var e,n;const o=new dynamodb_1.DocumentClient({region:"eu-west-2",accessKeyId:ACCESS_KEY,secretAccessKey:SECRET}),t=yield o.scan({TableName:TABLE_NAME}).promise(),s=null===(n=null===(e=null==t?void 0:t.$response)||void 0===e?void 0:e.data)||void 0===n?void 0:n.Items;if(s&&s.length>0){const e=getKeys(s),n=new Table({head:e});s.forEach(o=>{n.push(getRow(e,o))}),console.log(n.toString())}else console.log("\nNo rows found in this table.\n")}))();

},{"aws-sdk/clients/dynamodb":26,"cli-table3":128}],2:[function(require,module,exports){
"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var colors={};module.exports=colors,colors.themes={};var util=require("util"),ansiStyles=colors.styles=require("./styles"),defineProps=Object.defineProperties,newLineRegex=new RegExp(/[\r\n]+/g);colors.supportsColor=require("./system/supports-colors").supportsColor,void 0===colors.enabled&&(colors.enabled=!1!==colors.supportsColor()),colors.enable=function(){colors.enabled=!0},colors.disable=function(){colors.enabled=!1},colors.stripColors=colors.strip=function(e){return(""+e).replace(/\x1B\[\d+m/g,"")};var stylize=colors.stylize=function(e,o){if(!colors.enabled)return e+"";var r=ansiStyles[o];return!r&&o in colors?colors[o](e):r.open+e+r.close},matchOperatorsRe=/[|\\{}()[\]^$+*?.]/g,escapeStringRegexp=function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(matchOperatorsRe,"\\$&")};function build(e){var o=function e(){return applyStyle.apply(e,arguments)};return o._styles=e,o.__proto__=proto,o}var styles=function(){var e={};return ansiStyles.grey=ansiStyles.gray,Object.keys(ansiStyles).forEach(function(o){ansiStyles[o].closeRe=new RegExp(escapeStringRegexp(ansiStyles[o].close),"g"),e[o]={get:function(){return build(this._styles.concat(o))}}}),e}(),proto=defineProps(function(){},styles);function applyStyle(){var e=Array.prototype.slice.call(arguments).map(function(e){return null!=e&&e.constructor===String?e:util.inspect(e)}).join(" ");if(!colors.enabled||!e)return e;for(var o=-1!=e.indexOf("\n"),r=this._styles,t=r.length;t--;){var s=ansiStyles[r[t]];e=s.open+e.replace(s.closeRe,s.open)+s.close,o&&(e=e.replace(newLineRegex,function(e){return s.close+e+s.open}))}return e}function init(){var e={};return Object.keys(styles).forEach(function(o){e[o]={get:function(){return build([o])}}}),e}colors.setTheme=function(e){if("string"!=typeof e)for(var o in e)!function(o){colors[o]=function(r){if("object"===_typeof(e[o])){var t=r;for(var s in e[o])t=colors[e[o][s]](t);return t}return colors[e[o]](r)}}(o);else console.log("colors.setTheme now only accepts an object, not a string.  If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));")};var sequencer=function(e,o){var r=o.split("");return(r=r.map(e)).join("")};for(var map in colors.trap=require("./custom/trap"),colors.zalgo=require("./custom/zalgo"),colors.maps={},colors.maps.america=require("./maps/america")(colors),colors.maps.zebra=require("./maps/zebra")(colors),colors.maps.rainbow=require("./maps/rainbow")(colors),colors.maps.random=require("./maps/random")(colors),colors.maps)!function(e){colors[e]=function(o){return sequencer(colors.maps[e],o)}}(map);defineProps(colors,init());

},{"./custom/trap":3,"./custom/zalgo":4,"./maps/america":5,"./maps/rainbow":6,"./maps/random":7,"./maps/zebra":8,"./styles":9,"./system/supports-colors":11,"util":undefined}],3:[function(require,module,exports){
"use strict";module.exports=function(t,r){var o="";t=(t=t||"Run the trap, drop the bass").split("");var a={a:["@","Ą","Ⱥ","Ʌ","Δ","Λ","Д"],b:["ß","Ɓ","Ƀ","ɮ","β","฿"],c:["©","Ȼ","Ͼ"],d:["Ð","Ɗ","Ԁ","ԁ","Ԃ","ԃ"],e:["Ë","ĕ","Ǝ","ɘ","Σ","ξ","Ҽ","੬"],f:["Ӻ"],g:["ɢ"],h:["Ħ","ƕ","Ң","Һ","Ӈ","Ԋ"],i:["༏"],j:["Ĵ"],k:["ĸ","Ҡ","Ӄ","Ԟ"],l:["Ĺ"],m:["ʍ","Ӎ","ӎ","Ԡ","ԡ","൩"],n:["Ñ","ŋ","Ɲ","Ͷ","Π","Ҋ"],o:["Ø","õ","ø","Ǿ","ʘ","Ѻ","ם","۝","๏"],p:["Ƿ","Ҏ"],q:["্"],r:["®","Ʀ","Ȑ","Ɍ","ʀ","Я"],s:["§","Ϟ","ϟ","Ϩ"],t:["Ł","Ŧ","ͳ"],u:["Ʊ","Ս"],v:["ט"],w:["Ш","Ѡ","Ѽ","൰"],x:["Ҳ","Ӿ","Ӽ","ӽ"],y:["¥","Ұ","Ӌ"],z:["Ƶ","ɀ"]};return t.forEach(function(t){t=t.toLowerCase();var r=a[t]||[" "],e=Math.floor(Math.random()*r.length);o+=void 0!==a[t]?a[t][e]:t}),o};

},{}],4:[function(require,module,exports){
"use strict";module.exports=function(i,n){i=i||"   he is here   ";var o={up:["̍","̎","̄","̅","̿","̑","̆","̐","͒","͗","͑","̇","̈","̊","͂","̓","̈","͊","͋","͌","̃","̂","̌","͐","̀","́","̋","̏","̒","̓","̔","̽","̉","ͣ","ͤ","ͥ","ͦ","ͧ","ͨ","ͩ","ͪ","ͫ","ͬ","ͭ","ͮ","ͯ","̾","͛","͆","̚"],down:["̖","̗","̘","̙","̜","̝","̞","̟","̠","̤","̥","̦","̩","̪","̫","̬","̭","̮","̯","̰","̱","̲","̳","̹","̺","̻","̼","ͅ","͇","͈","͉","͍","͎","͓","͔","͕","͖","͙","͚","̣"],mid:["̕","̛","̀","́","͘","̡","̢","̧","̨","̴","̵","̶","͜","͝","͞","͟","͠","͢","̸","̷","͡"," ҉"]},d=[].concat(o.up,o.down,o.mid);function r(i){return Math.floor(Math.random()*i)}function u(i){var n=!1;return d.filter(function(o){n=o===i}),n}return function(i,n){var d,e,t="";for(e in(n=n||{}).up=void 0===n.up||n.up,n.mid=void 0===n.mid||n.mid,n.down=void 0===n.down||n.down,n.size=void 0!==n.size?n.size:"maxi",i=i.split(""))if(!u(e)){switch(t+=i[e],d={up:0,down:0,mid:0},n.size){case"mini":d.up=r(8),d.mid=r(2),d.down=r(8);break;case"maxi":d.up=r(16)+3,d.mid=r(4)+1,d.down=r(64)+3;break;default:d.up=r(8)+1,d.mid=r(6)/2,d.down=r(8)+1}var a=["up","mid","down"];for(var m in a)for(var f=a[m],p=0;p<=d[f];p++)n[f]&&(t+=o[f][r(o[f].length)])}return t}(i,n)};

},{}],5:[function(require,module,exports){
"use strict";module.exports=function(e){return function(r,t,u){if(" "===r)return r;switch(t%3){case 0:return e.red(r);case 1:return e.white(r);case 2:return e.blue(r)}}};

},{}],6:[function(require,module,exports){
"use strict";module.exports=function(e){var n=["red","yellow","green","blue","magenta"];return function(r,t,u){return" "===r?r:e[n[t++%n.length]](r)}};

},{}],7:[function(require,module,exports){
"use strict";module.exports=function(e){var r=["underline","inverse","grey","yellow","red","green","blue","white","cyan","magenta","brightYellow","brightRed","brightGreen","brightBlue","brightWhite","brightCyan","brightMagenta"];return function(t,n,i){return" "===t?t:e[r[Math.round(Math.random()*(r.length-2))]](t)}};

},{}],8:[function(require,module,exports){
"use strict";module.exports=function(e){return function(n,r,t){return r%2==0?n:e.inverse(n)}};

},{}],9:[function(require,module,exports){
"use strict";var styles={};module.exports=styles;var codes={reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29],black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],grey:[90,39],brightRed:[91,39],brightGreen:[92,39],brightYellow:[93,39],brightBlue:[94,39],brightMagenta:[95,39],brightCyan:[96,39],brightWhite:[97,39],bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgGray:[100,49],bgGrey:[100,49],bgBrightRed:[101,49],bgBrightGreen:[102,49],bgBrightYellow:[103,49],bgBrightBlue:[104,49],bgBrightMagenta:[105,49],bgBrightCyan:[106,49],bgBrightWhite:[107,49],blackBG:[40,49],redBG:[41,49],greenBG:[42,49],yellowBG:[43,49],blueBG:[44,49],magentaBG:[45,49],cyanBG:[46,49],whiteBG:[47,49]};Object.keys(codes).forEach(function(e){var g=codes[e],r=styles[e]=[];r.open="["+g[0]+"m",r.close="["+g[1]+"m"});

},{}],10:[function(require,module,exports){
"use strict";module.exports=function(e,r){var t=(r=r||process.argv).indexOf("--"),s=/^-{1,2}/.test(e)?"":"--",n=r.indexOf(s+e);return-1!==n&&(-1===t||n<t)};

},{}],11:[function(require,module,exports){
"use strict";var os=require("os"),hasFlag=require("./has-flag.js"),env=process.env,forceColor=void 0;function translateLevel(r){return 0!==r&&{level:r,hasBasic:!0,has256:r>=2,has16m:r>=3}}function supportsColor(r){if(!1===forceColor)return 0;if(hasFlag("color=16m")||hasFlag("color=full")||hasFlag("color=truecolor"))return 3;if(hasFlag("color=256"))return 2;if(r&&!r.isTTY&&!0!==forceColor)return 0;var e=forceColor?1:0;if("win32"===process.platform){var o=os.release().split(".");return Number(process.versions.node.split(".")[0])>=8&&Number(o[0])>=10&&Number(o[2])>=10586?Number(o[2])>=14931?3:2:1}if("CI"in env)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI"].some(function(r){return r in env})||"codeship"===env.CI_NAME?1:e;if("TEAMCITY_VERSION"in env)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION)?1:0;if("TERM_PROGRAM"in env){var s=parseInt((env.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(env.TERM_PROGRAM){case"iTerm.app":return s>=3?3:2;case"Hyper":return 3;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(env.TERM)?2:/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)?1:"COLORTERM"in env?1:(env.TERM,e)}function getSupportLevel(r){return translateLevel(supportsColor(r))}hasFlag("no-color")||hasFlag("no-colors")||hasFlag("color=false")?forceColor=!1:(hasFlag("color")||hasFlag("colors")||hasFlag("color=true")||hasFlag("color=always"))&&(forceColor=!0),"FORCE_COLOR"in env&&(forceColor=0===env.FORCE_COLOR.length||0!==parseInt(env.FORCE_COLOR,10)),module.exports={supportsColor:getSupportLevel,stdout:getSupportLevel(process.stdout),stderr:getSupportLevel(process.stderr)};

},{"./has-flag.js":10,"os":undefined}],12:[function(require,module,exports){
"use strict";var colors=require("./lib/colors");module.exports=colors;

},{"./lib/colors":2}],13:[function(require,module,exports){
"use strict";module.exports=function(){var d=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).onlyFirst,n=void 0!==d&&d,o=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(o,n?void 0:"g")};

},{}],14:[function(require,module,exports){
module.exports={
  "version": "2.0",
  "metadata": {
    "apiVersion": "2014-06-30",
    "endpointPrefix": "cognito-identity",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "Amazon Cognito Identity",
    "serviceId": "Cognito Identity",
    "signatureVersion": "v4",
    "targetPrefix": "AWSCognitoIdentityService",
    "uid": "cognito-identity-2014-06-30"
  },
  "operations": {
    "CreateIdentityPool": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityPoolName",
          "AllowUnauthenticatedIdentities"
        ],
        "members": {
          "IdentityPoolName": {},
          "AllowUnauthenticatedIdentities": {
            "type": "boolean"
          },
          "AllowClassicFlow": {
            "type": "boolean"
          },
          "SupportedLoginProviders": {
            "shape": "S5"
          },
          "DeveloperProviderName": {},
          "OpenIdConnectProviderARNs": {
            "shape": "S9"
          },
          "CognitoIdentityProviders": {
            "shape": "Sb"
          },
          "SamlProviderARNs": {
            "shape": "Sg"
          },
          "IdentityPoolTags": {
            "shape": "Sh"
          }
        }
      },
      "output": {
        "shape": "Sk"
      }
    },
    "DeleteIdentities": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityIdsToDelete"
        ],
        "members": {
          "IdentityIdsToDelete": {
            "type": "list",
            "member": {}
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "UnprocessedIdentityIds": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "IdentityId": {},
                "ErrorCode": {}
              }
            }
          }
        }
      }
    },
    "DeleteIdentityPool": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityPoolId"
        ],
        "members": {
          "IdentityPoolId": {}
        }
      }
    },
    "DescribeIdentity": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityId"
        ],
        "members": {
          "IdentityId": {}
        }
      },
      "output": {
        "shape": "Sv"
      }
    },
    "DescribeIdentityPool": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityPoolId"
        ],
        "members": {
          "IdentityPoolId": {}
        }
      },
      "output": {
        "shape": "Sk"
      }
    },
    "GetCredentialsForIdentity": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityId"
        ],
        "members": {
          "IdentityId": {},
          "Logins": {
            "shape": "S10"
          },
          "CustomRoleArn": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IdentityId": {},
          "Credentials": {
            "type": "structure",
            "members": {
              "AccessKeyId": {},
              "SecretKey": {},
              "SessionToken": {},
              "Expiration": {
                "type": "timestamp"
              }
            }
          }
        }
      },
      "authtype": "none"
    },
    "GetId": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityPoolId"
        ],
        "members": {
          "AccountId": {},
          "IdentityPoolId": {},
          "Logins": {
            "shape": "S10"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IdentityId": {}
        }
      },
      "authtype": "none"
    },
    "GetIdentityPoolRoles": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityPoolId"
        ],
        "members": {
          "IdentityPoolId": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IdentityPoolId": {},
          "Roles": {
            "shape": "S1c"
          },
          "RoleMappings": {
            "shape": "S1e"
          }
        }
      }
    },
    "GetOpenIdToken": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityId"
        ],
        "members": {
          "IdentityId": {},
          "Logins": {
            "shape": "S10"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IdentityId": {},
          "Token": {}
        }
      },
      "authtype": "none"
    },
    "GetOpenIdTokenForDeveloperIdentity": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityPoolId",
          "Logins"
        ],
        "members": {
          "IdentityPoolId": {},
          "IdentityId": {},
          "Logins": {
            "shape": "S10"
          },
          "PrincipalTags": {
            "shape": "S1s"
          },
          "TokenDuration": {
            "type": "long"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IdentityId": {},
          "Token": {}
        }
      }
    },
    "GetPrincipalTagAttributeMap": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityPoolId",
          "IdentityProviderName"
        ],
        "members": {
          "IdentityPoolId": {},
          "IdentityProviderName": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IdentityPoolId": {},
          "IdentityProviderName": {},
          "UseDefaults": {
            "type": "boolean"
          },
          "PrincipalTags": {
            "shape": "S1s"
          }
        }
      }
    },
    "ListIdentities": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityPoolId",
          "MaxResults"
        ],
        "members": {
          "IdentityPoolId": {},
          "MaxResults": {
            "type": "integer"
          },
          "NextToken": {},
          "HideDisabled": {
            "type": "boolean"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IdentityPoolId": {},
          "Identities": {
            "type": "list",
            "member": {
              "shape": "Sv"
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListIdentityPools": {
      "input": {
        "type": "structure",
        "required": [
          "MaxResults"
        ],
        "members": {
          "MaxResults": {
            "type": "integer"
          },
          "NextToken": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IdentityPools": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "IdentityPoolId": {},
                "IdentityPoolName": {}
              }
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListTagsForResource": {
      "input": {
        "type": "structure",
        "required": [
          "ResourceArn"
        ],
        "members": {
          "ResourceArn": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Tags": {
            "shape": "Sh"
          }
        }
      }
    },
    "LookupDeveloperIdentity": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityPoolId"
        ],
        "members": {
          "IdentityPoolId": {},
          "IdentityId": {},
          "DeveloperUserIdentifier": {},
          "MaxResults": {
            "type": "integer"
          },
          "NextToken": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IdentityId": {},
          "DeveloperUserIdentifierList": {
            "type": "list",
            "member": {}
          },
          "NextToken": {}
        }
      }
    },
    "MergeDeveloperIdentities": {
      "input": {
        "type": "structure",
        "required": [
          "SourceUserIdentifier",
          "DestinationUserIdentifier",
          "DeveloperProviderName",
          "IdentityPoolId"
        ],
        "members": {
          "SourceUserIdentifier": {},
          "DestinationUserIdentifier": {},
          "DeveloperProviderName": {},
          "IdentityPoolId": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IdentityId": {}
        }
      }
    },
    "SetIdentityPoolRoles": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityPoolId",
          "Roles"
        ],
        "members": {
          "IdentityPoolId": {},
          "Roles": {
            "shape": "S1c"
          },
          "RoleMappings": {
            "shape": "S1e"
          }
        }
      }
    },
    "SetPrincipalTagAttributeMap": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityPoolId",
          "IdentityProviderName"
        ],
        "members": {
          "IdentityPoolId": {},
          "IdentityProviderName": {},
          "UseDefaults": {
            "type": "boolean"
          },
          "PrincipalTags": {
            "shape": "S1s"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IdentityPoolId": {},
          "IdentityProviderName": {},
          "UseDefaults": {
            "type": "boolean"
          },
          "PrincipalTags": {
            "shape": "S1s"
          }
        }
      }
    },
    "TagResource": {
      "input": {
        "type": "structure",
        "required": [
          "ResourceArn",
          "Tags"
        ],
        "members": {
          "ResourceArn": {},
          "Tags": {
            "shape": "Sh"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "UnlinkDeveloperIdentity": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityId",
          "IdentityPoolId",
          "DeveloperProviderName",
          "DeveloperUserIdentifier"
        ],
        "members": {
          "IdentityId": {},
          "IdentityPoolId": {},
          "DeveloperProviderName": {},
          "DeveloperUserIdentifier": {}
        }
      }
    },
    "UnlinkIdentity": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityId",
          "Logins",
          "LoginsToRemove"
        ],
        "members": {
          "IdentityId": {},
          "Logins": {
            "shape": "S10"
          },
          "LoginsToRemove": {
            "shape": "Sw"
          }
        }
      },
      "authtype": "none"
    },
    "UntagResource": {
      "input": {
        "type": "structure",
        "required": [
          "ResourceArn",
          "TagKeys"
        ],
        "members": {
          "ResourceArn": {},
          "TagKeys": {
            "type": "list",
            "member": {}
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "UpdateIdentityPool": {
      "input": {
        "shape": "Sk"
      },
      "output": {
        "shape": "Sk"
      }
    }
  },
  "shapes": {
    "S5": {
      "type": "map",
      "key": {},
      "value": {}
    },
    "S9": {
      "type": "list",
      "member": {}
    },
    "Sb": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "ProviderName": {},
          "ClientId": {},
          "ServerSideTokenCheck": {
            "type": "boolean"
          }
        }
      }
    },
    "Sg": {
      "type": "list",
      "member": {}
    },
    "Sh": {
      "type": "map",
      "key": {},
      "value": {}
    },
    "Sk": {
      "type": "structure",
      "required": [
        "IdentityPoolId",
        "IdentityPoolName",
        "AllowUnauthenticatedIdentities"
      ],
      "members": {
        "IdentityPoolId": {},
        "IdentityPoolName": {},
        "AllowUnauthenticatedIdentities": {
          "type": "boolean"
        },
        "AllowClassicFlow": {
          "type": "boolean"
        },
        "SupportedLoginProviders": {
          "shape": "S5"
        },
        "DeveloperProviderName": {},
        "OpenIdConnectProviderARNs": {
          "shape": "S9"
        },
        "CognitoIdentityProviders": {
          "shape": "Sb"
        },
        "SamlProviderARNs": {
          "shape": "Sg"
        },
        "IdentityPoolTags": {
          "shape": "Sh"
        }
      }
    },
    "Sv": {
      "type": "structure",
      "members": {
        "IdentityId": {},
        "Logins": {
          "shape": "Sw"
        },
        "CreationDate": {
          "type": "timestamp"
        },
        "LastModifiedDate": {
          "type": "timestamp"
        }
      }
    },
    "Sw": {
      "type": "list",
      "member": {}
    },
    "S10": {
      "type": "map",
      "key": {},
      "value": {}
    },
    "S1c": {
      "type": "map",
      "key": {},
      "value": {}
    },
    "S1e": {
      "type": "map",
      "key": {},
      "value": {
        "type": "structure",
        "required": [
          "Type"
        ],
        "members": {
          "Type": {},
          "AmbiguousRoleResolution": {},
          "RulesConfiguration": {
            "type": "structure",
            "required": [
              "Rules"
            ],
            "members": {
              "Rules": {
                "type": "list",
                "member": {
                  "type": "structure",
                  "required": [
                    "Claim",
                    "MatchType",
                    "Value",
                    "RoleARN"
                  ],
                  "members": {
                    "Claim": {},
                    "MatchType": {},
                    "Value": {},
                    "RoleARN": {}
                  }
                }
              }
            }
          }
        }
      }
    },
    "S1s": {
      "type": "map",
      "key": {},
      "value": {}
    }
  }
}
},{}],15:[function(require,module,exports){
module.exports={
  "pagination": {
    "ListIdentityPools": {
      "input_token": "NextToken",
      "limit_key": "MaxResults",
      "output_token": "NextToken",
      "result_key": "IdentityPools"
    }
  }
}
},{}],16:[function(require,module,exports){
module.exports={
  "version": "2.0",
  "metadata": {
    "apiVersion": "2011-12-05",
    "endpointPrefix": "dynamodb",
    "jsonVersion": "1.0",
    "protocol": "json",
    "serviceAbbreviation": "DynamoDB",
    "serviceFullName": "Amazon DynamoDB",
    "serviceId": "DynamoDB",
    "signatureVersion": "v4",
    "targetPrefix": "DynamoDB_20111205",
    "uid": "dynamodb-2011-12-05"
  },
  "operations": {
    "BatchGetItem": {
      "input": {
        "type": "structure",
        "required": [
          "RequestItems"
        ],
        "members": {
          "RequestItems": {
            "shape": "S2"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Responses": {
            "type": "map",
            "key": {},
            "value": {
              "type": "structure",
              "members": {
                "Items": {
                  "shape": "Sk"
                },
                "ConsumedCapacityUnits": {
                  "type": "double"
                }
              }
            }
          },
          "UnprocessedKeys": {
            "shape": "S2"
          }
        }
      }
    },
    "BatchWriteItem": {
      "input": {
        "type": "structure",
        "required": [
          "RequestItems"
        ],
        "members": {
          "RequestItems": {
            "shape": "So"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Responses": {
            "type": "map",
            "key": {},
            "value": {
              "type": "structure",
              "members": {
                "ConsumedCapacityUnits": {
                  "type": "double"
                }
              }
            }
          },
          "UnprocessedItems": {
            "shape": "So"
          }
        }
      }
    },
    "CreateTable": {
      "input": {
        "type": "structure",
        "required": [
          "TableName",
          "KeySchema",
          "ProvisionedThroughput"
        ],
        "members": {
          "TableName": {},
          "KeySchema": {
            "shape": "Sy"
          },
          "ProvisionedThroughput": {
            "shape": "S12"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "TableDescription": {
            "shape": "S15"
          }
        }
      }
    },
    "DeleteItem": {
      "input": {
        "type": "structure",
        "required": [
          "TableName",
          "Key"
        ],
        "members": {
          "TableName": {},
          "Key": {
            "shape": "S6"
          },
          "Expected": {
            "shape": "S1b"
          },
          "ReturnValues": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Attributes": {
            "shape": "Sl"
          },
          "ConsumedCapacityUnits": {
            "type": "double"
          }
        }
      }
    },
    "DeleteTable": {
      "input": {
        "type": "structure",
        "required": [
          "TableName"
        ],
        "members": {
          "TableName": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "TableDescription": {
            "shape": "S15"
          }
        }
      }
    },
    "DescribeTable": {
      "input": {
        "type": "structure",
        "required": [
          "TableName"
        ],
        "members": {
          "TableName": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Table": {
            "shape": "S15"
          }
        }
      }
    },
    "GetItem": {
      "input": {
        "type": "structure",
        "required": [
          "TableName",
          "Key"
        ],
        "members": {
          "TableName": {},
          "Key": {
            "shape": "S6"
          },
          "AttributesToGet": {
            "shape": "Se"
          },
          "ConsistentRead": {
            "type": "boolean"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Item": {
            "shape": "Sl"
          },
          "ConsumedCapacityUnits": {
            "type": "double"
          }
        }
      }
    },
    "ListTables": {
      "input": {
        "type": "structure",
        "members": {
          "ExclusiveStartTableName": {},
          "Limit": {
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "TableNames": {
            "type": "list",
            "member": {}
          },
          "LastEvaluatedTableName": {}
        }
      }
    },
    "PutItem": {
      "input": {
        "type": "structure",
        "required": [
          "TableName",
          "Item"
        ],
        "members": {
          "TableName": {},
          "Item": {
            "shape": "Ss"
          },
          "Expected": {
            "shape": "S1b"
          },
          "ReturnValues": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Attributes": {
            "shape": "Sl"
          },
          "ConsumedCapacityUnits": {
            "type": "double"
          }
        }
      }
    },
    "Query": {
      "input": {
        "type": "structure",
        "required": [
          "TableName",
          "HashKeyValue"
        ],
        "members": {
          "TableName": {},
          "AttributesToGet": {
            "shape": "Se"
          },
          "Limit": {
            "type": "integer"
          },
          "ConsistentRead": {
            "type": "boolean"
          },
          "Count": {
            "type": "boolean"
          },
          "HashKeyValue": {
            "shape": "S7"
          },
          "RangeKeyCondition": {
            "shape": "S1u"
          },
          "ScanIndexForward": {
            "type": "boolean"
          },
          "ExclusiveStartKey": {
            "shape": "S6"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Items": {
            "shape": "Sk"
          },
          "Count": {
            "type": "integer"
          },
          "LastEvaluatedKey": {
            "shape": "S6"
          },
          "ConsumedCapacityUnits": {
            "type": "double"
          }
        }
      }
    },
    "Scan": {
      "input": {
        "type": "structure",
        "required": [
          "TableName"
        ],
        "members": {
          "TableName": {},
          "AttributesToGet": {
            "shape": "Se"
          },
          "Limit": {
            "type": "integer"
          },
          "Count": {
            "type": "boolean"
          },
          "ScanFilter": {
            "type": "map",
            "key": {},
            "value": {
              "shape": "S1u"
            }
          },
          "ExclusiveStartKey": {
            "shape": "S6"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Items": {
            "shape": "Sk"
          },
          "Count": {
            "type": "integer"
          },
          "ScannedCount": {
            "type": "integer"
          },
          "LastEvaluatedKey": {
            "shape": "S6"
          },
          "ConsumedCapacityUnits": {
            "type": "double"
          }
        }
      }
    },
    "UpdateItem": {
      "input": {
        "type": "structure",
        "required": [
          "TableName",
          "Key",
          "AttributeUpdates"
        ],
        "members": {
          "TableName": {},
          "Key": {
            "shape": "S6"
          },
          "AttributeUpdates": {
            "type": "map",
            "key": {},
            "value": {
              "type": "structure",
              "members": {
                "Value": {
                  "shape": "S7"
                },
                "Action": {}
              }
            }
          },
          "Expected": {
            "shape": "S1b"
          },
          "ReturnValues": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Attributes": {
            "shape": "Sl"
          },
          "ConsumedCapacityUnits": {
            "type": "double"
          }
        }
      }
    },
    "UpdateTable": {
      "input": {
        "type": "structure",
        "required": [
          "TableName",
          "ProvisionedThroughput"
        ],
        "members": {
          "TableName": {},
          "ProvisionedThroughput": {
            "shape": "S12"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "TableDescription": {
            "shape": "S15"
          }
        }
      }
    }
  },
  "shapes": {
    "S2": {
      "type": "map",
      "key": {},
      "value": {
        "type": "structure",
        "required": [
          "Keys"
        ],
        "members": {
          "Keys": {
            "type": "list",
            "member": {
              "shape": "S6"
            }
          },
          "AttributesToGet": {
            "shape": "Se"
          },
          "ConsistentRead": {
            "type": "boolean"
          }
        }
      }
    },
    "S6": {
      "type": "structure",
      "required": [
        "HashKeyElement"
      ],
      "members": {
        "HashKeyElement": {
          "shape": "S7"
        },
        "RangeKeyElement": {
          "shape": "S7"
        }
      }
    },
    "S7": {
      "type": "structure",
      "members": {
        "S": {},
        "N": {},
        "B": {
          "type": "blob"
        },
        "SS": {
          "type": "list",
          "member": {}
        },
        "NS": {
          "type": "list",
          "member": {}
        },
        "BS": {
          "type": "list",
          "member": {
            "type": "blob"
          }
        }
      }
    },
    "Se": {
      "type": "list",
      "member": {}
    },
    "Sk": {
      "type": "list",
      "member": {
        "shape": "Sl"
      }
    },
    "Sl": {
      "type": "map",
      "key": {},
      "value": {
        "shape": "S7"
      }
    },
    "So": {
      "type": "map",
      "key": {},
      "value": {
        "type": "list",
        "member": {
          "type": "structure",
          "members": {
            "PutRequest": {
              "type": "structure",
              "required": [
                "Item"
              ],
              "members": {
                "Item": {
                  "shape": "Ss"
                }
              }
            },
            "DeleteRequest": {
              "type": "structure",
              "required": [
                "Key"
              ],
              "members": {
                "Key": {
                  "shape": "S6"
                }
              }
            }
          }
        }
      }
    },
    "Ss": {
      "type": "map",
      "key": {},
      "value": {
        "shape": "S7"
      }
    },
    "Sy": {
      "type": "structure",
      "required": [
        "HashKeyElement"
      ],
      "members": {
        "HashKeyElement": {
          "shape": "Sz"
        },
        "RangeKeyElement": {
          "shape": "Sz"
        }
      }
    },
    "Sz": {
      "type": "structure",
      "required": [
        "AttributeName",
        "AttributeType"
      ],
      "members": {
        "AttributeName": {},
        "AttributeType": {}
      }
    },
    "S12": {
      "type": "structure",
      "required": [
        "ReadCapacityUnits",
        "WriteCapacityUnits"
      ],
      "members": {
        "ReadCapacityUnits": {
          "type": "long"
        },
        "WriteCapacityUnits": {
          "type": "long"
        }
      }
    },
    "S15": {
      "type": "structure",
      "members": {
        "TableName": {},
        "KeySchema": {
          "shape": "Sy"
        },
        "TableStatus": {},
        "CreationDateTime": {
          "type": "timestamp"
        },
        "ProvisionedThroughput": {
          "type": "structure",
          "members": {
            "LastIncreaseDateTime": {
              "type": "timestamp"
            },
            "LastDecreaseDateTime": {
              "type": "timestamp"
            },
            "NumberOfDecreasesToday": {
              "type": "long"
            },
            "ReadCapacityUnits": {
              "type": "long"
            },
            "WriteCapacityUnits": {
              "type": "long"
            }
          }
        },
        "TableSizeBytes": {
          "type": "long"
        },
        "ItemCount": {
          "type": "long"
        }
      }
    },
    "S1b": {
      "type": "map",
      "key": {},
      "value": {
        "type": "structure",
        "members": {
          "Value": {
            "shape": "S7"
          },
          "Exists": {
            "type": "boolean"
          }
        }
      }
    },
    "S1u": {
      "type": "structure",
      "required": [
        "ComparisonOperator"
      ],
      "members": {
        "AttributeValueList": {
          "type": "list",
          "member": {
            "shape": "S7"
          }
        },
        "ComparisonOperator": {}
      }
    }
  }
}
},{}],17:[function(require,module,exports){
module.exports={
  "pagination": {
    "BatchGetItem": {
      "input_token": "RequestItems",
      "output_token": "UnprocessedKeys"
    },
    "ListTables": {
      "input_token": "ExclusiveStartTableName",
      "limit_key": "Limit",
      "output_token": "LastEvaluatedTableName",
      "result_key": "TableNames"
    },
    "Query": {
      "input_token": "ExclusiveStartKey",
      "limit_key": "Limit",
      "output_token": "LastEvaluatedKey",
      "result_key": "Items"
    },
    "Scan": {
      "input_token": "ExclusiveStartKey",
      "limit_key": "Limit",
      "output_token": "LastEvaluatedKey",
      "result_key": "Items"
    }
  }
}
},{}],18:[function(require,module,exports){
module.exports={
  "version": 2,
  "waiters": {
    "TableExists": {
      "delay": 20,
      "operation": "DescribeTable",
      "maxAttempts": 25,
      "acceptors": [
        {
          "expected": "ACTIVE",
          "matcher": "path",
          "state": "success",
          "argument": "Table.TableStatus"
        },
        {
          "expected": "ResourceNotFoundException",
          "matcher": "error",
          "state": "retry"
        }
      ]
    },
    "TableNotExists": {
      "delay": 20,
      "operation": "DescribeTable",
      "maxAttempts": 25,
      "acceptors": [
        {
          "expected": "ResourceNotFoundException",
          "matcher": "error",
          "state": "success"
        }
      ]
    }
  }
}

},{}],19:[function(require,module,exports){
module.exports={
  "version": "2.0",
  "metadata": {
    "apiVersion": "2012-08-10",
    "endpointPrefix": "dynamodb",
    "jsonVersion": "1.0",
    "protocol": "json",
    "serviceAbbreviation": "DynamoDB",
    "serviceFullName": "Amazon DynamoDB",
    "serviceId": "DynamoDB",
    "signatureVersion": "v4",
    "targetPrefix": "DynamoDB_20120810",
    "uid": "dynamodb-2012-08-10"
  },
  "operations": {
    "BatchExecuteStatement": {
      "input": {
        "type": "structure",
        "required": [
          "Statements"
        ],
        "members": {
          "Statements": {
            "type": "list",
            "member": {
              "type": "structure",
              "required": [
                "Statement"
              ],
              "members": {
                "Statement": {},
                "Parameters": {
                  "shape": "S5"
                },
                "ConsistentRead": {
                  "type": "boolean"
                },
                "ReturnValuesOnConditionCheckFailure": {}
              }
            }
          },
          "ReturnConsumedCapacity": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Responses": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Error": {
                  "type": "structure",
                  "members": {
                    "Code": {},
                    "Message": {},
                    "Item": {
                      "shape": "Sr"
                    }
                  }
                },
                "TableName": {},
                "Item": {
                  "shape": "Sr"
                }
              }
            }
          },
          "ConsumedCapacity": {
            "shape": "St"
          }
        }
      }
    },
    "BatchGetItem": {
      "input": {
        "type": "structure",
        "required": [
          "RequestItems"
        ],
        "members": {
          "RequestItems": {
            "shape": "S10"
          },
          "ReturnConsumedCapacity": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Responses": {
            "type": "map",
            "key": {},
            "value": {
              "shape": "S1a"
            }
          },
          "UnprocessedKeys": {
            "shape": "S10"
          },
          "ConsumedCapacity": {
            "shape": "St"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "BatchWriteItem": {
      "input": {
        "type": "structure",
        "required": [
          "RequestItems"
        ],
        "members": {
          "RequestItems": {
            "shape": "S1c"
          },
          "ReturnConsumedCapacity": {},
          "ReturnItemCollectionMetrics": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "UnprocessedItems": {
            "shape": "S1c"
          },
          "ItemCollectionMetrics": {
            "shape": "S1k"
          },
          "ConsumedCapacity": {
            "shape": "St"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "CreateBackup": {
      "input": {
        "type": "structure",
        "required": [
          "TableName",
          "BackupName"
        ],
        "members": {
          "TableName": {},
          "BackupName": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "BackupDetails": {
            "shape": "S1t"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "CreateGlobalTable": {
      "input": {
        "type": "structure",
        "required": [
          "GlobalTableName",
          "ReplicationGroup"
        ],
        "members": {
          "GlobalTableName": {},
          "ReplicationGroup": {
            "shape": "S21"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "GlobalTableDescription": {
            "shape": "S25"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "CreateTable": {
      "input": {
        "type": "structure",
        "required": [
          "AttributeDefinitions",
          "TableName",
          "KeySchema"
        ],
        "members": {
          "AttributeDefinitions": {
            "shape": "S2l"
          },
          "TableName": {},
          "KeySchema": {
            "shape": "S2p"
          },
          "LocalSecondaryIndexes": {
            "shape": "S2s"
          },
          "GlobalSecondaryIndexes": {
            "shape": "S2y"
          },
          "BillingMode": {},
          "ProvisionedThroughput": {
            "shape": "S30"
          },
          "StreamSpecification": {
            "shape": "S32"
          },
          "SSESpecification": {
            "shape": "S35"
          },
          "Tags": {
            "shape": "S38"
          },
          "TableClass": {},
          "DeletionProtectionEnabled": {
            "type": "boolean"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "TableDescription": {
            "shape": "S3e"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "DeleteBackup": {
      "input": {
        "type": "structure",
        "required": [
          "BackupArn"
        ],
        "members": {
          "BackupArn": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "BackupDescription": {
            "shape": "S42"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "DeleteItem": {
      "input": {
        "type": "structure",
        "required": [
          "TableName",
          "Key"
        ],
        "members": {
          "TableName": {},
          "Key": {
            "shape": "S13"
          },
          "Expected": {
            "shape": "S4f"
          },
          "ConditionalOperator": {},
          "ReturnValues": {},
          "ReturnConsumedCapacity": {},
          "ReturnItemCollectionMetrics": {},
          "ConditionExpression": {},
          "ExpressionAttributeNames": {
            "shape": "S16"
          },
          "ExpressionAttributeValues": {
            "shape": "S4n"
          },
          "ReturnValuesOnConditionCheckFailure": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Attributes": {
            "shape": "Sr"
          },
          "ConsumedCapacity": {
            "shape": "Su"
          },
          "ItemCollectionMetrics": {
            "shape": "S1m"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "DeleteTable": {
      "input": {
        "type": "structure",
        "required": [
          "TableName"
        ],
        "members": {
          "TableName": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "TableDescription": {
            "shape": "S3e"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "DescribeBackup": {
      "input": {
        "type": "structure",
        "required": [
          "BackupArn"
        ],
        "members": {
          "BackupArn": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "BackupDescription": {
            "shape": "S42"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "DescribeContinuousBackups": {
      "input": {
        "type": "structure",
        "required": [
          "TableName"
        ],
        "members": {
          "TableName": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ContinuousBackupsDescription": {
            "shape": "S4w"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "DescribeContributorInsights": {
      "input": {
        "type": "structure",
        "required": [
          "TableName"
        ],
        "members": {
          "TableName": {},
          "IndexName": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "TableName": {},
          "IndexName": {},
          "ContributorInsightsRuleList": {
            "type": "list",
            "member": {}
          },
          "ContributorInsightsStatus": {},
          "LastUpdateDateTime": {
            "type": "timestamp"
          },
          "FailureException": {
            "type": "structure",
            "members": {
              "ExceptionName": {},
              "ExceptionDescription": {}
            }
          }
        }
      }
    },
    "DescribeEndpoints": {
      "input": {
        "type": "structure",
        "members": {}
      },
      "output": {
        "type": "structure",
        "required": [
          "Endpoints"
        ],
        "members": {
          "Endpoints": {
            "type": "list",
            "member": {
              "type": "structure",
              "required": [
                "Address",
                "CachePeriodInMinutes"
              ],
              "members": {
                "Address": {},
                "CachePeriodInMinutes": {
                  "type": "long"
                }
              }
            }
          }
        }
      },
      "endpointoperation": true
    },
    "DescribeExport": {
      "input": {
        "type": "structure",
        "required": [
          "ExportArn"
        ],
        "members": {
          "ExportArn": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ExportDescription": {
            "shape": "S5h"
          }
        }
      }
    },
    "DescribeGlobalTable": {
      "input": {
        "type": "structure",
        "required": [
          "GlobalTableName"
        ],
        "members": {
          "GlobalTableName": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "GlobalTableDescription": {
            "shape": "S25"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "DescribeGlobalTableSettings": {
      "input": {
        "type": "structure",
        "required": [
          "GlobalTableName"
        ],
        "members": {
          "GlobalTableName": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "GlobalTableName": {},
          "ReplicaSettings": {
            "shape": "S66"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "DescribeImport": {
      "input": {
        "type": "structure",
        "required": [
          "ImportArn"
        ],
        "members": {
          "ImportArn": {}
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "ImportTableDescription"
        ],
        "members": {
          "ImportTableDescription": {
            "shape": "S6k"
          }
        }
      }
    },
    "DescribeKinesisStreamingDestination": {
      "input": {
        "type": "structure",
        "required": [
          "TableName"
        ],
        "members": {
          "TableName": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "TableName": {},
          "KinesisDataStreamDestinations": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "StreamArn": {},
                "DestinationStatus": {},
                "DestinationStatusDescription": {}
              }
            }
          }
        }
      },
      "endpointdiscovery": {}
    },
    "DescribeLimits": {
      "input": {
        "type": "structure",
        "members": {}
      },
      "output": {
        "type": "structure",
        "members": {
          "AccountMaxReadCapacityUnits": {
            "type": "long"
          },
          "AccountMaxWriteCapacityUnits": {
            "type": "long"
          },
          "TableMaxReadCapacityUnits": {
            "type": "long"
          },
          "TableMaxWriteCapacityUnits": {
            "type": "long"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "DescribeTable": {
      "input": {
        "type": "structure",
        "required": [
          "TableName"
        ],
        "members": {
          "TableName": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Table": {
            "shape": "S3e"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "DescribeTableReplicaAutoScaling": {
      "input": {
        "type": "structure",
        "required": [
          "TableName"
        ],
        "members": {
          "TableName": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "TableAutoScalingDescription": {
            "shape": "S7c"
          }
        }
      }
    },
    "DescribeTimeToLive": {
      "input": {
        "type": "structure",
        "required": [
          "TableName"
        ],
        "members": {
          "TableName": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "TimeToLiveDescription": {
            "shape": "S4b"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "DisableKinesisStreamingDestination": {
      "input": {
        "shape": "S7j"
      },
      "output": {
        "shape": "S7k"
      },
      "endpointdiscovery": {}
    },
    "EnableKinesisStreamingDestination": {
      "input": {
        "shape": "S7j"
      },
      "output": {
        "shape": "S7k"
      },
      "endpointdiscovery": {}
    },
    "ExecuteStatement": {
      "input": {
        "type": "structure",
        "required": [
          "Statement"
        ],
        "members": {
          "Statement": {},
          "Parameters": {
            "shape": "S5"
          },
          "ConsistentRead": {
            "type": "boolean"
          },
          "NextToken": {},
          "ReturnConsumedCapacity": {},
          "Limit": {
            "type": "integer"
          },
          "ReturnValuesOnConditionCheckFailure": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Items": {
            "shape": "S1a"
          },
          "NextToken": {},
          "ConsumedCapacity": {
            "shape": "Su"
          },
          "LastEvaluatedKey": {
            "shape": "S13"
          }
        }
      }
    },
    "ExecuteTransaction": {
      "input": {
        "type": "structure",
        "required": [
          "TransactStatements"
        ],
        "members": {
          "TransactStatements": {
            "type": "list",
            "member": {
              "type": "structure",
              "required": [
                "Statement"
              ],
              "members": {
                "Statement": {},
                "Parameters": {
                  "shape": "S5"
                },
                "ReturnValuesOnConditionCheckFailure": {}
              }
            }
          },
          "ClientRequestToken": {
            "idempotencyToken": true
          },
          "ReturnConsumedCapacity": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Responses": {
            "shape": "S7u"
          },
          "ConsumedCapacity": {
            "shape": "St"
          }
        }
      }
    },
    "ExportTableToPointInTime": {
      "input": {
        "type": "structure",
        "required": [
          "TableArn",
          "S3Bucket"
        ],
        "members": {
          "TableArn": {},
          "ExportTime": {
            "type": "timestamp"
          },
          "ClientToken": {
            "idempotencyToken": true
          },
          "S3Bucket": {},
          "S3BucketOwner": {},
          "S3Prefix": {},
          "S3SseAlgorithm": {},
          "S3SseKmsKeyId": {},
          "ExportFormat": {},
          "ExportType": {},
          "IncrementalExportSpecification": {
            "shape": "S5y"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ExportDescription": {
            "shape": "S5h"
          }
        }
      }
    },
    "GetItem": {
      "input": {
        "type": "structure",
        "required": [
          "TableName",
          "Key"
        ],
        "members": {
          "TableName": {},
          "Key": {
            "shape": "S13"
          },
          "AttributesToGet": {
            "shape": "S14"
          },
          "ConsistentRead": {
            "type": "boolean"
          },
          "ReturnConsumedCapacity": {},
          "ProjectionExpression": {},
          "ExpressionAttributeNames": {
            "shape": "S16"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Item": {
            "shape": "Sr"
          },
          "ConsumedCapacity": {
            "shape": "Su"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "ImportTable": {
      "input": {
        "type": "structure",
        "required": [
          "S3BucketSource",
          "InputFormat",
          "TableCreationParameters"
        ],
        "members": {
          "ClientToken": {
            "idempotencyToken": true
          },
          "S3BucketSource": {
            "shape": "S6m"
          },
          "InputFormat": {},
          "InputFormatOptions": {
            "shape": "S6q"
          },
          "InputCompressionType": {},
          "TableCreationParameters": {
            "shape": "S6w"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "ImportTableDescription"
        ],
        "members": {
          "ImportTableDescription": {
            "shape": "S6k"
          }
        }
      }
    },
    "ListBackups": {
      "input": {
        "type": "structure",
        "members": {
          "TableName": {},
          "Limit": {
            "type": "integer"
          },
          "TimeRangeLowerBound": {
            "type": "timestamp"
          },
          "TimeRangeUpperBound": {
            "type": "timestamp"
          },
          "ExclusiveStartBackupArn": {},
          "BackupType": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "BackupSummaries": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "TableName": {},
                "TableId": {},
                "TableArn": {},
                "BackupArn": {},
                "BackupName": {},
                "BackupCreationDateTime": {
                  "type": "timestamp"
                },
                "BackupExpiryDateTime": {
                  "type": "timestamp"
                },
                "BackupStatus": {},
                "BackupType": {},
                "BackupSizeBytes": {
                  "type": "long"
                }
              }
            }
          },
          "LastEvaluatedBackupArn": {}
        }
      },
      "endpointdiscovery": {}
    },
    "ListContributorInsights": {
      "input": {
        "type": "structure",
        "members": {
          "TableName": {},
          "NextToken": {},
          "MaxResults": {
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ContributorInsightsSummaries": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "TableName": {},
                "IndexName": {},
                "ContributorInsightsStatus": {}
              }
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListExports": {
      "input": {
        "type": "structure",
        "members": {
          "TableArn": {},
          "MaxResults": {
            "type": "integer"
          },
          "NextToken": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ExportSummaries": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "ExportArn": {},
                "ExportStatus": {},
                "ExportType": {}
              }
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListGlobalTables": {
      "input": {
        "type": "structure",
        "members": {
          "ExclusiveStartGlobalTableName": {},
          "Limit": {
            "type": "integer"
          },
          "RegionName": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "GlobalTables": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "GlobalTableName": {},
                "ReplicationGroup": {
                  "shape": "S21"
                }
              }
            }
          },
          "LastEvaluatedGlobalTableName": {}
        }
      },
      "endpointdiscovery": {}
    },
    "ListImports": {
      "input": {
        "type": "structure",
        "members": {
          "TableArn": {},
          "PageSize": {
            "type": "integer"
          },
          "NextToken": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ImportSummaryList": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "ImportArn": {},
                "ImportStatus": {},
                "TableArn": {},
                "S3BucketSource": {
                  "shape": "S6m"
                },
                "CloudWatchLogGroupArn": {},
                "InputFormat": {},
                "StartTime": {
                  "type": "timestamp"
                },
                "EndTime": {
                  "type": "timestamp"
                }
              }
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListTables": {
      "input": {
        "type": "structure",
        "members": {
          "ExclusiveStartTableName": {},
          "Limit": {
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "TableNames": {
            "type": "list",
            "member": {}
          },
          "LastEvaluatedTableName": {}
        }
      },
      "endpointdiscovery": {}
    },
    "ListTagsOfResource": {
      "input": {
        "type": "structure",
        "required": [
          "ResourceArn"
        ],
        "members": {
          "ResourceArn": {},
          "NextToken": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Tags": {
            "shape": "S38"
          },
          "NextToken": {}
        }
      },
      "endpointdiscovery": {}
    },
    "PutItem": {
      "input": {
        "type": "structure",
        "required": [
          "TableName",
          "Item"
        ],
        "members": {
          "TableName": {},
          "Item": {
            "shape": "S1g"
          },
          "Expected": {
            "shape": "S4f"
          },
          "ReturnValues": {},
          "ReturnConsumedCapacity": {},
          "ReturnItemCollectionMetrics": {},
          "ConditionalOperator": {},
          "ConditionExpression": {},
          "ExpressionAttributeNames": {
            "shape": "S16"
          },
          "ExpressionAttributeValues": {
            "shape": "S4n"
          },
          "ReturnValuesOnConditionCheckFailure": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Attributes": {
            "shape": "Sr"
          },
          "ConsumedCapacity": {
            "shape": "Su"
          },
          "ItemCollectionMetrics": {
            "shape": "S1m"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "Query": {
      "input": {
        "type": "structure",
        "required": [
          "TableName"
        ],
        "members": {
          "TableName": {},
          "IndexName": {},
          "Select": {},
          "AttributesToGet": {
            "shape": "S14"
          },
          "Limit": {
            "type": "integer"
          },
          "ConsistentRead": {
            "type": "boolean"
          },
          "KeyConditions": {
            "type": "map",
            "key": {},
            "value": {
              "shape": "S98"
            }
          },
          "QueryFilter": {
            "shape": "S99"
          },
          "ConditionalOperator": {},
          "ScanIndexForward": {
            "type": "boolean"
          },
          "ExclusiveStartKey": {
            "shape": "S13"
          },
          "ReturnConsumedCapacity": {},
          "ProjectionExpression": {},
          "FilterExpression": {},
          "KeyConditionExpression": {},
          "ExpressionAttributeNames": {
            "shape": "S16"
          },
          "ExpressionAttributeValues": {
            "shape": "S4n"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Items": {
            "shape": "S1a"
          },
          "Count": {
            "type": "integer"
          },
          "ScannedCount": {
            "type": "integer"
          },
          "LastEvaluatedKey": {
            "shape": "S13"
          },
          "ConsumedCapacity": {
            "shape": "Su"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "RestoreTableFromBackup": {
      "input": {
        "type": "structure",
        "required": [
          "TargetTableName",
          "BackupArn"
        ],
        "members": {
          "TargetTableName": {},
          "BackupArn": {},
          "BillingModeOverride": {},
          "GlobalSecondaryIndexOverride": {
            "shape": "S2y"
          },
          "LocalSecondaryIndexOverride": {
            "shape": "S2s"
          },
          "ProvisionedThroughputOverride": {
            "shape": "S30"
          },
          "SSESpecificationOverride": {
            "shape": "S35"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "TableDescription": {
            "shape": "S3e"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "RestoreTableToPointInTime": {
      "input": {
        "type": "structure",
        "required": [
          "TargetTableName"
        ],
        "members": {
          "SourceTableArn": {},
          "SourceTableName": {},
          "TargetTableName": {},
          "UseLatestRestorableTime": {
            "type": "boolean"
          },
          "RestoreDateTime": {
            "type": "timestamp"
          },
          "BillingModeOverride": {},
          "GlobalSecondaryIndexOverride": {
            "shape": "S2y"
          },
          "LocalSecondaryIndexOverride": {
            "shape": "S2s"
          },
          "ProvisionedThroughputOverride": {
            "shape": "S30"
          },
          "SSESpecificationOverride": {
            "shape": "S35"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "TableDescription": {
            "shape": "S3e"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "Scan": {
      "input": {
        "type": "structure",
        "required": [
          "TableName"
        ],
        "members": {
          "TableName": {},
          "IndexName": {},
          "AttributesToGet": {
            "shape": "S14"
          },
          "Limit": {
            "type": "integer"
          },
          "Select": {},
          "ScanFilter": {
            "shape": "S99"
          },
          "ConditionalOperator": {},
          "ExclusiveStartKey": {
            "shape": "S13"
          },
          "ReturnConsumedCapacity": {},
          "TotalSegments": {
            "type": "integer"
          },
          "Segment": {
            "type": "integer"
          },
          "ProjectionExpression": {},
          "FilterExpression": {},
          "ExpressionAttributeNames": {
            "shape": "S16"
          },
          "ExpressionAttributeValues": {
            "shape": "S4n"
          },
          "ConsistentRead": {
            "type": "boolean"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Items": {
            "shape": "S1a"
          },
          "Count": {
            "type": "integer"
          },
          "ScannedCount": {
            "type": "integer"
          },
          "LastEvaluatedKey": {
            "shape": "S13"
          },
          "ConsumedCapacity": {
            "shape": "Su"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "TagResource": {
      "input": {
        "type": "structure",
        "required": [
          "ResourceArn",
          "Tags"
        ],
        "members": {
          "ResourceArn": {},
          "Tags": {
            "shape": "S38"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "TransactGetItems": {
      "input": {
        "type": "structure",
        "required": [
          "TransactItems"
        ],
        "members": {
          "TransactItems": {
            "type": "list",
            "member": {
              "type": "structure",
              "required": [
                "Get"
              ],
              "members": {
                "Get": {
                  "type": "structure",
                  "required": [
                    "Key",
                    "TableName"
                  ],
                  "members": {
                    "Key": {
                      "shape": "S13"
                    },
                    "TableName": {},
                    "ProjectionExpression": {},
                    "ExpressionAttributeNames": {
                      "shape": "S16"
                    }
                  }
                }
              }
            }
          },
          "ReturnConsumedCapacity": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ConsumedCapacity": {
            "shape": "St"
          },
          "Responses": {
            "shape": "S7u"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "TransactWriteItems": {
      "input": {
        "type": "structure",
        "required": [
          "TransactItems"
        ],
        "members": {
          "TransactItems": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "ConditionCheck": {
                  "type": "structure",
                  "required": [
                    "Key",
                    "TableName",
                    "ConditionExpression"
                  ],
                  "members": {
                    "Key": {
                      "shape": "S13"
                    },
                    "TableName": {},
                    "ConditionExpression": {},
                    "ExpressionAttributeNames": {
                      "shape": "S16"
                    },
                    "ExpressionAttributeValues": {
                      "shape": "S4n"
                    },
                    "ReturnValuesOnConditionCheckFailure": {}
                  }
                },
                "Put": {
                  "type": "structure",
                  "required": [
                    "Item",
                    "TableName"
                  ],
                  "members": {
                    "Item": {
                      "shape": "S1g"
                    },
                    "TableName": {},
                    "ConditionExpression": {},
                    "ExpressionAttributeNames": {
                      "shape": "S16"
                    },
                    "ExpressionAttributeValues": {
                      "shape": "S4n"
                    },
                    "ReturnValuesOnConditionCheckFailure": {}
                  }
                },
                "Delete": {
                  "type": "structure",
                  "required": [
                    "Key",
                    "TableName"
                  ],
                  "members": {
                    "Key": {
                      "shape": "S13"
                    },
                    "TableName": {},
                    "ConditionExpression": {},
                    "ExpressionAttributeNames": {
                      "shape": "S16"
                    },
                    "ExpressionAttributeValues": {
                      "shape": "S4n"
                    },
                    "ReturnValuesOnConditionCheckFailure": {}
                  }
                },
                "Update": {
                  "type": "structure",
                  "required": [
                    "Key",
                    "UpdateExpression",
                    "TableName"
                  ],
                  "members": {
                    "Key": {
                      "shape": "S13"
                    },
                    "UpdateExpression": {},
                    "TableName": {},
                    "ConditionExpression": {},
                    "ExpressionAttributeNames": {
                      "shape": "S16"
                    },
                    "ExpressionAttributeValues": {
                      "shape": "S4n"
                    },
                    "ReturnValuesOnConditionCheckFailure": {}
                  }
                }
              }
            }
          },
          "ReturnConsumedCapacity": {},
          "ReturnItemCollectionMetrics": {},
          "ClientRequestToken": {
            "idempotencyToken": true
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ConsumedCapacity": {
            "shape": "St"
          },
          "ItemCollectionMetrics": {
            "shape": "S1k"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "UntagResource": {
      "input": {
        "type": "structure",
        "required": [
          "ResourceArn",
          "TagKeys"
        ],
        "members": {
          "ResourceArn": {},
          "TagKeys": {
            "type": "list",
            "member": {}
          }
        }
      },
      "endpointdiscovery": {}
    },
    "UpdateContinuousBackups": {
      "input": {
        "type": "structure",
        "required": [
          "TableName",
          "PointInTimeRecoverySpecification"
        ],
        "members": {
          "TableName": {},
          "PointInTimeRecoverySpecification": {
            "type": "structure",
            "required": [
              "PointInTimeRecoveryEnabled"
            ],
            "members": {
              "PointInTimeRecoveryEnabled": {
                "type": "boolean"
              }
            }
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ContinuousBackupsDescription": {
            "shape": "S4w"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "UpdateContributorInsights": {
      "input": {
        "type": "structure",
        "required": [
          "TableName",
          "ContributorInsightsAction"
        ],
        "members": {
          "TableName": {},
          "IndexName": {},
          "ContributorInsightsAction": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "TableName": {},
          "IndexName": {},
          "ContributorInsightsStatus": {}
        }
      }
    },
    "UpdateGlobalTable": {
      "input": {
        "type": "structure",
        "required": [
          "GlobalTableName",
          "ReplicaUpdates"
        ],
        "members": {
          "GlobalTableName": {},
          "ReplicaUpdates": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Create": {
                  "type": "structure",
                  "required": [
                    "RegionName"
                  ],
                  "members": {
                    "RegionName": {}
                  }
                },
                "Delete": {
                  "type": "structure",
                  "required": [
                    "RegionName"
                  ],
                  "members": {
                    "RegionName": {}
                  }
                }
              }
            }
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "GlobalTableDescription": {
            "shape": "S25"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "UpdateGlobalTableSettings": {
      "input": {
        "type": "structure",
        "required": [
          "GlobalTableName"
        ],
        "members": {
          "GlobalTableName": {},
          "GlobalTableBillingMode": {},
          "GlobalTableProvisionedWriteCapacityUnits": {
            "type": "long"
          },
          "GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate": {
            "shape": "Saf"
          },
          "GlobalTableGlobalSecondaryIndexSettingsUpdate": {
            "type": "list",
            "member": {
              "type": "structure",
              "required": [
                "IndexName"
              ],
              "members": {
                "IndexName": {},
                "ProvisionedWriteCapacityUnits": {
                  "type": "long"
                },
                "ProvisionedWriteCapacityAutoScalingSettingsUpdate": {
                  "shape": "Saf"
                }
              }
            }
          },
          "ReplicaSettingsUpdate": {
            "type": "list",
            "member": {
              "type": "structure",
              "required": [
                "RegionName"
              ],
              "members": {
                "RegionName": {},
                "ReplicaProvisionedReadCapacityUnits": {
                  "type": "long"
                },
                "ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate": {
                  "shape": "Saf"
                },
                "ReplicaGlobalSecondaryIndexSettingsUpdate": {
                  "type": "list",
                  "member": {
                    "type": "structure",
                    "required": [
                      "IndexName"
                    ],
                    "members": {
                      "IndexName": {},
                      "ProvisionedReadCapacityUnits": {
                        "type": "long"
                      },
                      "ProvisionedReadCapacityAutoScalingSettingsUpdate": {
                        "shape": "Saf"
                      }
                    }
                  }
                },
                "ReplicaTableClass": {}
              }
            }
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "GlobalTableName": {},
          "ReplicaSettings": {
            "shape": "S66"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "UpdateItem": {
      "input": {
        "type": "structure",
        "required": [
          "TableName",
          "Key"
        ],
        "members": {
          "TableName": {},
          "Key": {
            "shape": "S13"
          },
          "AttributeUpdates": {
            "type": "map",
            "key": {},
            "value": {
              "type": "structure",
              "members": {
                "Value": {
                  "shape": "S6"
                },
                "Action": {}
              }
            }
          },
          "Expected": {
            "shape": "S4f"
          },
          "ConditionalOperator": {},
          "ReturnValues": {},
          "ReturnConsumedCapacity": {},
          "ReturnItemCollectionMetrics": {},
          "UpdateExpression": {},
          "ConditionExpression": {},
          "ExpressionAttributeNames": {
            "shape": "S16"
          },
          "ExpressionAttributeValues": {
            "shape": "S4n"
          },
          "ReturnValuesOnConditionCheckFailure": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Attributes": {
            "shape": "Sr"
          },
          "ConsumedCapacity": {
            "shape": "Su"
          },
          "ItemCollectionMetrics": {
            "shape": "S1m"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "UpdateTable": {
      "input": {
        "type": "structure",
        "required": [
          "TableName"
        ],
        "members": {
          "AttributeDefinitions": {
            "shape": "S2l"
          },
          "TableName": {},
          "BillingMode": {},
          "ProvisionedThroughput": {
            "shape": "S30"
          },
          "GlobalSecondaryIndexUpdates": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Update": {
                  "type": "structure",
                  "required": [
                    "IndexName",
                    "ProvisionedThroughput"
                  ],
                  "members": {
                    "IndexName": {},
                    "ProvisionedThroughput": {
                      "shape": "S30"
                    }
                  }
                },
                "Create": {
                  "type": "structure",
                  "required": [
                    "IndexName",
                    "KeySchema",
                    "Projection"
                  ],
                  "members": {
                    "IndexName": {},
                    "KeySchema": {
                      "shape": "S2p"
                    },
                    "Projection": {
                      "shape": "S2u"
                    },
                    "ProvisionedThroughput": {
                      "shape": "S30"
                    }
                  }
                },
                "Delete": {
                  "type": "structure",
                  "required": [
                    "IndexName"
                  ],
                  "members": {
                    "IndexName": {}
                  }
                }
              }
            }
          },
          "StreamSpecification": {
            "shape": "S32"
          },
          "SSESpecification": {
            "shape": "S35"
          },
          "ReplicaUpdates": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Create": {
                  "type": "structure",
                  "required": [
                    "RegionName"
                  ],
                  "members": {
                    "RegionName": {},
                    "KMSMasterKeyId": {},
                    "ProvisionedThroughputOverride": {
                      "shape": "S2c"
                    },
                    "GlobalSecondaryIndexes": {
                      "shape": "Sb4"
                    },
                    "TableClassOverride": {}
                  }
                },
                "Update": {
                  "type": "structure",
                  "required": [
                    "RegionName"
                  ],
                  "members": {
                    "RegionName": {},
                    "KMSMasterKeyId": {},
                    "ProvisionedThroughputOverride": {
                      "shape": "S2c"
                    },
                    "GlobalSecondaryIndexes": {
                      "shape": "Sb4"
                    },
                    "TableClassOverride": {}
                  }
                },
                "Delete": {
                  "type": "structure",
                  "required": [
                    "RegionName"
                  ],
                  "members": {
                    "RegionName": {}
                  }
                }
              }
            }
          },
          "TableClass": {},
          "DeletionProtectionEnabled": {
            "type": "boolean"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "TableDescription": {
            "shape": "S3e"
          }
        }
      },
      "endpointdiscovery": {}
    },
    "UpdateTableReplicaAutoScaling": {
      "input": {
        "type": "structure",
        "required": [
          "TableName"
        ],
        "members": {
          "GlobalSecondaryIndexUpdates": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "IndexName": {},
                "ProvisionedWriteCapacityAutoScalingUpdate": {
                  "shape": "Saf"
                }
              }
            }
          },
          "TableName": {},
          "ProvisionedWriteCapacityAutoScalingUpdate": {
            "shape": "Saf"
          },
          "ReplicaUpdates": {
            "type": "list",
            "member": {
              "type": "structure",
              "required": [
                "RegionName"
              ],
              "members": {
                "RegionName": {},
                "ReplicaGlobalSecondaryIndexUpdates": {
                  "type": "list",
                  "member": {
                    "type": "structure",
                    "members": {
                      "IndexName": {},
                      "ProvisionedReadCapacityAutoScalingUpdate": {
                        "shape": "Saf"
                      }
                    }
                  }
                },
                "ReplicaProvisionedReadCapacityAutoScalingUpdate": {
                  "shape": "Saf"
                }
              }
            }
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "TableAutoScalingDescription": {
            "shape": "S7c"
          }
        }
      }
    },
    "UpdateTimeToLive": {
      "input": {
        "type": "structure",
        "required": [
          "TableName",
          "TimeToLiveSpecification"
        ],
        "members": {
          "TableName": {},
          "TimeToLiveSpecification": {
            "shape": "Sbi"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "TimeToLiveSpecification": {
            "shape": "Sbi"
          }
        }
      },
      "endpointdiscovery": {}
    }
  },
  "shapes": {
    "S5": {
      "type": "list",
      "member": {
        "shape": "S6"
      }
    },
    "S6": {
      "type": "structure",
      "members": {
        "S": {},
        "N": {},
        "B": {
          "type": "blob"
        },
        "SS": {
          "type": "list",
          "member": {}
        },
        "NS": {
          "type": "list",
          "member": {}
        },
        "BS": {
          "type": "list",
          "member": {
            "type": "blob"
          }
        },
        "M": {
          "type": "map",
          "key": {},
          "value": {
            "shape": "S6"
          }
        },
        "L": {
          "type": "list",
          "member": {
            "shape": "S6"
          }
        },
        "NULL": {
          "type": "boolean"
        },
        "BOOL": {
          "type": "boolean"
        }
      }
    },
    "Sr": {
      "type": "map",
      "key": {},
      "value": {
        "shape": "S6"
      }
    },
    "St": {
      "type": "list",
      "member": {
        "shape": "Su"
      }
    },
    "Su": {
      "type": "structure",
      "members": {
        "TableName": {},
        "CapacityUnits": {
          "type": "double"
        },
        "ReadCapacityUnits": {
          "type": "double"
        },
        "WriteCapacityUnits": {
          "type": "double"
        },
        "Table": {
          "shape": "Sw"
        },
        "LocalSecondaryIndexes": {
          "shape": "Sx"
        },
        "GlobalSecondaryIndexes": {
          "shape": "Sx"
        }
      }
    },
    "Sw": {
      "type": "structure",
      "members": {
        "ReadCapacityUnits": {
          "type": "double"
        },
        "WriteCapacityUnits": {
          "type": "double"
        },
        "CapacityUnits": {
          "type": "double"
        }
      }
    },
    "Sx": {
      "type": "map",
      "key": {},
      "value": {
        "shape": "Sw"
      }
    },
    "S10": {
      "type": "map",
      "key": {},
      "value": {
        "type": "structure",
        "required": [
          "Keys"
        ],
        "members": {
          "Keys": {
            "type": "list",
            "member": {
              "shape": "S13"
            }
          },
          "AttributesToGet": {
            "shape": "S14"
          },
          "ConsistentRead": {
            "type": "boolean"
          },
          "ProjectionExpression": {},
          "ExpressionAttributeNames": {
            "shape": "S16"
          }
        }
      }
    },
    "S13": {
      "type": "map",
      "key": {},
      "value": {
        "shape": "S6"
      }
    },
    "S14": {
      "type": "list",
      "member": {}
    },
    "S16": {
      "type": "map",
      "key": {},
      "value": {}
    },
    "S1a": {
      "type": "list",
      "member": {
        "shape": "Sr"
      }
    },
    "S1c": {
      "type": "map",
      "key": {},
      "value": {
        "type": "list",
        "member": {
          "type": "structure",
          "members": {
            "PutRequest": {
              "type": "structure",
              "required": [
                "Item"
              ],
              "members": {
                "Item": {
                  "shape": "S1g"
                }
              }
            },
            "DeleteRequest": {
              "type": "structure",
              "required": [
                "Key"
              ],
              "members": {
                "Key": {
                  "shape": "S13"
                }
              }
            }
          }
        }
      }
    },
    "S1g": {
      "type": "map",
      "key": {},
      "value": {
        "shape": "S6"
      }
    },
    "S1k": {
      "type": "map",
      "key": {},
      "value": {
        "type": "list",
        "member": {
          "shape": "S1m"
        }
      }
    },
    "S1m": {
      "type": "structure",
      "members": {
        "ItemCollectionKey": {
          "type": "map",
          "key": {},
          "value": {
            "shape": "S6"
          }
        },
        "SizeEstimateRangeGB": {
          "type": "list",
          "member": {
            "type": "double"
          }
        }
      }
    },
    "S1t": {
      "type": "structure",
      "required": [
        "BackupArn",
        "BackupName",
        "BackupStatus",
        "BackupType",
        "BackupCreationDateTime"
      ],
      "members": {
        "BackupArn": {},
        "BackupName": {},
        "BackupSizeBytes": {
          "type": "long"
        },
        "BackupStatus": {},
        "BackupType": {},
        "BackupCreationDateTime": {
          "type": "timestamp"
        },
        "BackupExpiryDateTime": {
          "type": "timestamp"
        }
      }
    },
    "S21": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "RegionName": {}
        }
      }
    },
    "S25": {
      "type": "structure",
      "members": {
        "ReplicationGroup": {
          "shape": "S26"
        },
        "GlobalTableArn": {},
        "CreationDateTime": {
          "type": "timestamp"
        },
        "GlobalTableStatus": {},
        "GlobalTableName": {}
      }
    },
    "S26": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "RegionName": {},
          "ReplicaStatus": {},
          "ReplicaStatusDescription": {},
          "ReplicaStatusPercentProgress": {},
          "KMSMasterKeyId": {},
          "ProvisionedThroughputOverride": {
            "shape": "S2c"
          },
          "GlobalSecondaryIndexes": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "IndexName": {},
                "ProvisionedThroughputOverride": {
                  "shape": "S2c"
                }
              }
            }
          },
          "ReplicaInaccessibleDateTime": {
            "type": "timestamp"
          },
          "ReplicaTableClassSummary": {
            "shape": "S2g"
          }
        }
      }
    },
    "S2c": {
      "type": "structure",
      "members": {
        "ReadCapacityUnits": {
          "type": "long"
        }
      }
    },
    "S2g": {
      "type": "structure",
      "members": {
        "TableClass": {},
        "LastUpdateDateTime": {
          "type": "timestamp"
        }
      }
    },
    "S2l": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "AttributeName",
          "AttributeType"
        ],
        "members": {
          "AttributeName": {},
          "AttributeType": {}
        }
      }
    },
    "S2p": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "AttributeName",
          "KeyType"
        ],
        "members": {
          "AttributeName": {},
          "KeyType": {}
        }
      }
    },
    "S2s": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "IndexName",
          "KeySchema",
          "Projection"
        ],
        "members": {
          "IndexName": {},
          "KeySchema": {
            "shape": "S2p"
          },
          "Projection": {
            "shape": "S2u"
          }
        }
      }
    },
    "S2u": {
      "type": "structure",
      "members": {
        "ProjectionType": {},
        "NonKeyAttributes": {
          "type": "list",
          "member": {}
        }
      }
    },
    "S2y": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "IndexName",
          "KeySchema",
          "Projection"
        ],
        "members": {
          "IndexName": {},
          "KeySchema": {
            "shape": "S2p"
          },
          "Projection": {
            "shape": "S2u"
          },
          "ProvisionedThroughput": {
            "shape": "S30"
          }
        }
      }
    },
    "S30": {
      "type": "structure",
      "required": [
        "ReadCapacityUnits",
        "WriteCapacityUnits"
      ],
      "members": {
        "ReadCapacityUnits": {
          "type": "long"
        },
        "WriteCapacityUnits": {
          "type": "long"
        }
      }
    },
    "S32": {
      "type": "structure",
      "required": [
        "StreamEnabled"
      ],
      "members": {
        "StreamEnabled": {
          "type": "boolean"
        },
        "StreamViewType": {}
      }
    },
    "S35": {
      "type": "structure",
      "members": {
        "Enabled": {
          "type": "boolean"
        },
        "SSEType": {},
        "KMSMasterKeyId": {}
      }
    },
    "S38": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "Key",
          "Value"
        ],
        "members": {
          "Key": {},
          "Value": {}
        }
      }
    },
    "S3e": {
      "type": "structure",
      "members": {
        "AttributeDefinitions": {
          "shape": "S2l"
        },
        "TableName": {},
        "KeySchema": {
          "shape": "S2p"
        },
        "TableStatus": {},
        "CreationDateTime": {
          "type": "timestamp"
        },
        "ProvisionedThroughput": {
          "shape": "S3g"
        },
        "TableSizeBytes": {
          "type": "long"
        },
        "ItemCount": {
          "type": "long"
        },
        "TableArn": {},
        "TableId": {},
        "BillingModeSummary": {
          "shape": "S3k"
        },
        "LocalSecondaryIndexes": {
          "type": "list",
          "member": {
            "type": "structure",
            "members": {
              "IndexName": {},
              "KeySchema": {
                "shape": "S2p"
              },
              "Projection": {
                "shape": "S2u"
              },
              "IndexSizeBytes": {
                "type": "long"
              },
              "ItemCount": {
                "type": "long"
              },
              "IndexArn": {}
            }
          }
        },
        "GlobalSecondaryIndexes": {
          "type": "list",
          "member": {
            "type": "structure",
            "members": {
              "IndexName": {},
              "KeySchema": {
                "shape": "S2p"
              },
              "Projection": {
                "shape": "S2u"
              },
              "IndexStatus": {},
              "Backfilling": {
                "type": "boolean"
              },
              "ProvisionedThroughput": {
                "shape": "S3g"
              },
              "IndexSizeBytes": {
                "type": "long"
              },
              "ItemCount": {
                "type": "long"
              },
              "IndexArn": {}
            }
          }
        },
        "StreamSpecification": {
          "shape": "S32"
        },
        "LatestStreamLabel": {},
        "LatestStreamArn": {},
        "GlobalTableVersion": {},
        "Replicas": {
          "shape": "S26"
        },
        "RestoreSummary": {
          "type": "structure",
          "required": [
            "RestoreDateTime",
            "RestoreInProgress"
          ],
          "members": {
            "SourceBackupArn": {},
            "SourceTableArn": {},
            "RestoreDateTime": {
              "type": "timestamp"
            },
            "RestoreInProgress": {
              "type": "boolean"
            }
          }
        },
        "SSEDescription": {
          "shape": "S3v"
        },
        "ArchivalSummary": {
          "type": "structure",
          "members": {
            "ArchivalDateTime": {
              "type": "timestamp"
            },
            "ArchivalReason": {},
            "ArchivalBackupArn": {}
          }
        },
        "TableClassSummary": {
          "shape": "S2g"
        },
        "DeletionProtectionEnabled": {
          "type": "boolean"
        }
      }
    },
    "S3g": {
      "type": "structure",
      "members": {
        "LastIncreaseDateTime": {
          "type": "timestamp"
        },
        "LastDecreaseDateTime": {
          "type": "timestamp"
        },
        "NumberOfDecreasesToday": {
          "type": "long"
        },
        "ReadCapacityUnits": {
          "type": "long"
        },
        "WriteCapacityUnits": {
          "type": "long"
        }
      }
    },
    "S3k": {
      "type": "structure",
      "members": {
        "BillingMode": {},
        "LastUpdateToPayPerRequestDateTime": {
          "type": "timestamp"
        }
      }
    },
    "S3v": {
      "type": "structure",
      "members": {
        "Status": {},
        "SSEType": {},
        "KMSMasterKeyArn": {},
        "InaccessibleEncryptionDateTime": {
          "type": "timestamp"
        }
      }
    },
    "S42": {
      "type": "structure",
      "members": {
        "BackupDetails": {
          "shape": "S1t"
        },
        "SourceTableDetails": {
          "type": "structure",
          "required": [
            "TableName",
            "TableId",
            "KeySchema",
            "TableCreationDateTime",
            "ProvisionedThroughput"
          ],
          "members": {
            "TableName": {},
            "TableId": {},
            "TableArn": {},
            "TableSizeBytes": {
              "type": "long"
            },
            "KeySchema": {
              "shape": "S2p"
            },
            "TableCreationDateTime": {
              "type": "timestamp"
            },
            "ProvisionedThroughput": {
              "shape": "S30"
            },
            "ItemCount": {
              "type": "long"
            },
            "BillingMode": {}
          }
        },
        "SourceTableFeatureDetails": {
          "type": "structure",
          "members": {
            "LocalSecondaryIndexes": {
              "type": "list",
              "member": {
                "type": "structure",
                "members": {
                  "IndexName": {},
                  "KeySchema": {
                    "shape": "S2p"
                  },
                  "Projection": {
                    "shape": "S2u"
                  }
                }
              }
            },
            "GlobalSecondaryIndexes": {
              "type": "list",
              "member": {
                "type": "structure",
                "members": {
                  "IndexName": {},
                  "KeySchema": {
                    "shape": "S2p"
                  },
                  "Projection": {
                    "shape": "S2u"
                  },
                  "ProvisionedThroughput": {
                    "shape": "S30"
                  }
                }
              }
            },
            "StreamDescription": {
              "shape": "S32"
            },
            "TimeToLiveDescription": {
              "shape": "S4b"
            },
            "SSEDescription": {
              "shape": "S3v"
            }
          }
        }
      }
    },
    "S4b": {
      "type": "structure",
      "members": {
        "TimeToLiveStatus": {},
        "AttributeName": {}
      }
    },
    "S4f": {
      "type": "map",
      "key": {},
      "value": {
        "type": "structure",
        "members": {
          "Value": {
            "shape": "S6"
          },
          "Exists": {
            "type": "boolean"
          },
          "ComparisonOperator": {},
          "AttributeValueList": {
            "shape": "S4j"
          }
        }
      }
    },
    "S4j": {
      "type": "list",
      "member": {
        "shape": "S6"
      }
    },
    "S4n": {
      "type": "map",
      "key": {},
      "value": {
        "shape": "S6"
      }
    },
    "S4w": {
      "type": "structure",
      "required": [
        "ContinuousBackupsStatus"
      ],
      "members": {
        "ContinuousBackupsStatus": {},
        "PointInTimeRecoveryDescription": {
          "type": "structure",
          "members": {
            "PointInTimeRecoveryStatus": {},
            "EarliestRestorableDateTime": {
              "type": "timestamp"
            },
            "LatestRestorableDateTime": {
              "type": "timestamp"
            }
          }
        }
      }
    },
    "S5h": {
      "type": "structure",
      "members": {
        "ExportArn": {},
        "ExportStatus": {},
        "StartTime": {
          "type": "timestamp"
        },
        "EndTime": {
          "type": "timestamp"
        },
        "ExportManifest": {},
        "TableArn": {},
        "TableId": {},
        "ExportTime": {
          "type": "timestamp"
        },
        "ClientToken": {},
        "S3Bucket": {},
        "S3BucketOwner": {},
        "S3Prefix": {},
        "S3SseAlgorithm": {},
        "S3SseKmsKeyId": {},
        "FailureCode": {},
        "FailureMessage": {},
        "ExportFormat": {},
        "BilledSizeBytes": {
          "type": "long"
        },
        "ItemCount": {
          "type": "long"
        },
        "ExportType": {},
        "IncrementalExportSpecification": {
          "shape": "S5y"
        }
      }
    },
    "S5y": {
      "type": "structure",
      "members": {
        "ExportFromTime": {
          "type": "timestamp"
        },
        "ExportToTime": {
          "type": "timestamp"
        },
        "ExportViewType": {}
      }
    },
    "S66": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "RegionName"
        ],
        "members": {
          "RegionName": {},
          "ReplicaStatus": {},
          "ReplicaBillingModeSummary": {
            "shape": "S3k"
          },
          "ReplicaProvisionedReadCapacityUnits": {
            "type": "long"
          },
          "ReplicaProvisionedReadCapacityAutoScalingSettings": {
            "shape": "S68"
          },
          "ReplicaProvisionedWriteCapacityUnits": {
            "type": "long"
          },
          "ReplicaProvisionedWriteCapacityAutoScalingSettings": {
            "shape": "S68"
          },
          "ReplicaGlobalSecondaryIndexSettings": {
            "type": "list",
            "member": {
              "type": "structure",
              "required": [
                "IndexName"
              ],
              "members": {
                "IndexName": {},
                "IndexStatus": {},
                "ProvisionedReadCapacityUnits": {
                  "type": "long"
                },
                "ProvisionedReadCapacityAutoScalingSettings": {
                  "shape": "S68"
                },
                "ProvisionedWriteCapacityUnits": {
                  "type": "long"
                },
                "ProvisionedWriteCapacityAutoScalingSettings": {
                  "shape": "S68"
                }
              }
            }
          },
          "ReplicaTableClassSummary": {
            "shape": "S2g"
          }
        }
      }
    },
    "S68": {
      "type": "structure",
      "members": {
        "MinimumUnits": {
          "type": "long"
        },
        "MaximumUnits": {
          "type": "long"
        },
        "AutoScalingDisabled": {
          "type": "boolean"
        },
        "AutoScalingRoleArn": {},
        "ScalingPolicies": {
          "type": "list",
          "member": {
            "type": "structure",
            "members": {
              "PolicyName": {},
              "TargetTrackingScalingPolicyConfiguration": {
                "type": "structure",
                "required": [
                  "TargetValue"
                ],
                "members": {
                  "DisableScaleIn": {
                    "type": "boolean"
                  },
                  "ScaleInCooldown": {
                    "type": "integer"
                  },
                  "ScaleOutCooldown": {
                    "type": "integer"
                  },
                  "TargetValue": {
                    "type": "double"
                  }
                }
              }
            }
          }
        }
      }
    },
    "S6k": {
      "type": "structure",
      "members": {
        "ImportArn": {},
        "ImportStatus": {},
        "TableArn": {},
        "TableId": {},
        "ClientToken": {},
        "S3BucketSource": {
          "shape": "S6m"
        },
        "ErrorCount": {
          "type": "long"
        },
        "CloudWatchLogGroupArn": {},
        "InputFormat": {},
        "InputFormatOptions": {
          "shape": "S6q"
        },
        "InputCompressionType": {},
        "TableCreationParameters": {
          "shape": "S6w"
        },
        "StartTime": {
          "type": "timestamp"
        },
        "EndTime": {
          "type": "timestamp"
        },
        "ProcessedSizeBytes": {
          "type": "long"
        },
        "ProcessedItemCount": {
          "type": "long"
        },
        "ImportedItemCount": {
          "type": "long"
        },
        "FailureCode": {},
        "FailureMessage": {}
      }
    },
    "S6m": {
      "type": "structure",
      "required": [
        "S3Bucket"
      ],
      "members": {
        "S3BucketOwner": {},
        "S3Bucket": {},
        "S3KeyPrefix": {}
      }
    },
    "S6q": {
      "type": "structure",
      "members": {
        "Csv": {
          "type": "structure",
          "members": {
            "Delimiter": {},
            "HeaderList": {
              "type": "list",
              "member": {}
            }
          }
        }
      }
    },
    "S6w": {
      "type": "structure",
      "required": [
        "TableName",
        "AttributeDefinitions",
        "KeySchema"
      ],
      "members": {
        "TableName": {},
        "AttributeDefinitions": {
          "shape": "S2l"
        },
        "KeySchema": {
          "shape": "S2p"
        },
        "BillingMode": {},
        "ProvisionedThroughput": {
          "shape": "S30"
        },
        "SSESpecification": {
          "shape": "S35"
        },
        "GlobalSecondaryIndexes": {
          "shape": "S2y"
        }
      }
    },
    "S7c": {
      "type": "structure",
      "members": {
        "TableName": {},
        "TableStatus": {},
        "Replicas": {
          "type": "list",
          "member": {
            "type": "structure",
            "members": {
              "RegionName": {},
              "GlobalSecondaryIndexes": {
                "type": "list",
                "member": {
                  "type": "structure",
                  "members": {
                    "IndexName": {},
                    "IndexStatus": {},
                    "ProvisionedReadCapacityAutoScalingSettings": {
                      "shape": "S68"
                    },
                    "ProvisionedWriteCapacityAutoScalingSettings": {
                      "shape": "S68"
                    }
                  }
                }
              },
              "ReplicaProvisionedReadCapacityAutoScalingSettings": {
                "shape": "S68"
              },
              "ReplicaProvisionedWriteCapacityAutoScalingSettings": {
                "shape": "S68"
              },
              "ReplicaStatus": {}
            }
          }
        }
      }
    },
    "S7j": {
      "type": "structure",
      "required": [
        "TableName",
        "StreamArn"
      ],
      "members": {
        "TableName": {},
        "StreamArn": {}
      }
    },
    "S7k": {
      "type": "structure",
      "members": {
        "TableName": {},
        "StreamArn": {},
        "DestinationStatus": {}
      }
    },
    "S7u": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "Item": {
            "shape": "Sr"
          }
        }
      }
    },
    "S98": {
      "type": "structure",
      "required": [
        "ComparisonOperator"
      ],
      "members": {
        "AttributeValueList": {
          "shape": "S4j"
        },
        "ComparisonOperator": {}
      }
    },
    "S99": {
      "type": "map",
      "key": {},
      "value": {
        "shape": "S98"
      }
    },
    "Saf": {
      "type": "structure",
      "members": {
        "MinimumUnits": {
          "type": "long"
        },
        "MaximumUnits": {
          "type": "long"
        },
        "AutoScalingDisabled": {
          "type": "boolean"
        },
        "AutoScalingRoleArn": {},
        "ScalingPolicyUpdate": {
          "type": "structure",
          "required": [
            "TargetTrackingScalingPolicyConfiguration"
          ],
          "members": {
            "PolicyName": {},
            "TargetTrackingScalingPolicyConfiguration": {
              "type": "structure",
              "required": [
                "TargetValue"
              ],
              "members": {
                "DisableScaleIn": {
                  "type": "boolean"
                },
                "ScaleInCooldown": {
                  "type": "integer"
                },
                "ScaleOutCooldown": {
                  "type": "integer"
                },
                "TargetValue": {
                  "type": "double"
                }
              }
            }
          }
        }
      }
    },
    "Sb4": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "IndexName"
        ],
        "members": {
          "IndexName": {},
          "ProvisionedThroughputOverride": {
            "shape": "S2c"
          }
        }
      }
    },
    "Sbi": {
      "type": "structure",
      "required": [
        "Enabled",
        "AttributeName"
      ],
      "members": {
        "Enabled": {
          "type": "boolean"
        },
        "AttributeName": {}
      }
    }
  }
}
},{}],20:[function(require,module,exports){
module.exports={
  "pagination": {
    "BatchGetItem": {
      "input_token": "RequestItems",
      "output_token": "UnprocessedKeys"
    },
    "ListContributorInsights": {
      "input_token": "NextToken",
      "limit_key": "MaxResults",
      "output_token": "NextToken"
    },
    "ListExports": {
      "input_token": "NextToken",
      "limit_key": "MaxResults",
      "output_token": "NextToken"
    },
    "ListImports": {
      "input_token": "NextToken",
      "limit_key": "PageSize",
      "output_token": "NextToken"
    },
    "ListTables": {
      "input_token": "ExclusiveStartTableName",
      "limit_key": "Limit",
      "output_token": "LastEvaluatedTableName",
      "result_key": "TableNames"
    },
    "Query": {
      "input_token": "ExclusiveStartKey",
      "limit_key": "Limit",
      "output_token": "LastEvaluatedKey",
      "result_key": "Items"
    },
    "Scan": {
      "input_token": "ExclusiveStartKey",
      "limit_key": "Limit",
      "output_token": "LastEvaluatedKey",
      "result_key": "Items"
    }
  }
}
},{}],21:[function(require,module,exports){
arguments[4][18][0].apply(exports,arguments)
},{"dup":18}],22:[function(require,module,exports){
module.exports={
  "acm": {
    "name": "ACM",
    "cors": true
  },
  "apigateway": {
    "name": "APIGateway",
    "cors": true
  },
  "applicationautoscaling": {
    "prefix": "application-autoscaling",
    "name": "ApplicationAutoScaling",
    "cors": true
  },
  "appstream": {
    "name": "AppStream"
  },
  "autoscaling": {
    "name": "AutoScaling",
    "cors": true
  },
  "batch": {
    "name": "Batch"
  },
  "budgets": {
    "name": "Budgets"
  },
  "clouddirectory": {
    "name": "CloudDirectory",
    "versions": [
      "2016-05-10*"
    ]
  },
  "cloudformation": {
    "name": "CloudFormation",
    "cors": true
  },
  "cloudfront": {
    "name": "CloudFront",
    "versions": [
      "2013-05-12*",
      "2013-11-11*",
      "2014-05-31*",
      "2014-10-21*",
      "2014-11-06*",
      "2015-04-17*",
      "2015-07-27*",
      "2015-09-17*",
      "2016-01-13*",
      "2016-01-28*",
      "2016-08-01*",
      "2016-08-20*",
      "2016-09-07*",
      "2016-09-29*",
      "2016-11-25*",
      "2017-03-25*",
      "2017-10-30*",
      "2018-06-18*",
      "2018-11-05*",
      "2019-03-26*"
    ],
    "cors": true
  },
  "cloudhsm": {
    "name": "CloudHSM",
    "cors": true
  },
  "cloudsearch": {
    "name": "CloudSearch"
  },
  "cloudsearchdomain": {
    "name": "CloudSearchDomain"
  },
  "cloudtrail": {
    "name": "CloudTrail",
    "cors": true
  },
  "cloudwatch": {
    "prefix": "monitoring",
    "name": "CloudWatch",
    "cors": true
  },
  "cloudwatchevents": {
    "prefix": "events",
    "name": "CloudWatchEvents",
    "versions": [
      "2014-02-03*"
    ],
    "cors": true
  },
  "cloudwatchlogs": {
    "prefix": "logs",
    "name": "CloudWatchLogs",
    "cors": true
  },
  "codebuild": {
    "name": "CodeBuild",
    "cors": true
  },
  "codecommit": {
    "name": "CodeCommit",
    "cors": true
  },
  "codedeploy": {
    "name": "CodeDeploy",
    "cors": true
  },
  "codepipeline": {
    "name": "CodePipeline",
    "cors": true
  },
  "cognitoidentity": {
    "prefix": "cognito-identity",
    "name": "CognitoIdentity",
    "cors": true
  },
  "cognitoidentityserviceprovider": {
    "prefix": "cognito-idp",
    "name": "CognitoIdentityServiceProvider",
    "cors": true
  },
  "cognitosync": {
    "prefix": "cognito-sync",
    "name": "CognitoSync",
    "cors": true
  },
  "configservice": {
    "prefix": "config",
    "name": "ConfigService",
    "cors": true
  },
  "cur": {
    "name": "CUR",
    "cors": true
  },
  "datapipeline": {
    "name": "DataPipeline"
  },
  "devicefarm": {
    "name": "DeviceFarm",
    "cors": true
  },
  "directconnect": {
    "name": "DirectConnect",
    "cors": true
  },
  "directoryservice": {
    "prefix": "ds",
    "name": "DirectoryService"
  },
  "discovery": {
    "name": "Discovery"
  },
  "dms": {
    "name": "DMS"
  },
  "dynamodb": {
    "name": "DynamoDB",
    "cors": true
  },
  "dynamodbstreams": {
    "prefix": "streams.dynamodb",
    "name": "DynamoDBStreams",
    "cors": true
  },
  "ec2": {
    "name": "EC2",
    "versions": [
      "2013-06-15*",
      "2013-10-15*",
      "2014-02-01*",
      "2014-05-01*",
      "2014-06-15*",
      "2014-09-01*",
      "2014-10-01*",
      "2015-03-01*",
      "2015-04-15*",
      "2015-10-01*",
      "2016-04-01*",
      "2016-09-15*"
    ],
    "cors": true
  },
  "ecr": {
    "name": "ECR",
    "cors": true
  },
  "ecs": {
    "name": "ECS",
    "cors": true
  },
  "efs": {
    "prefix": "elasticfilesystem",
    "name": "EFS",
    "cors": true
  },
  "elasticache": {
    "name": "ElastiCache",
    "versions": [
      "2012-11-15*",
      "2014-03-24*",
      "2014-07-15*",
      "2014-09-30*"
    ],
    "cors": true
  },
  "elasticbeanstalk": {
    "name": "ElasticBeanstalk",
    "cors": true
  },
  "elb": {
    "prefix": "elasticloadbalancing",
    "name": "ELB",
    "cors": true
  },
  "elbv2": {
    "prefix": "elasticloadbalancingv2",
    "name": "ELBv2",
    "cors": true
  },
  "emr": {
    "prefix": "elasticmapreduce",
    "name": "EMR",
    "cors": true
  },
  "es": {
    "name": "ES"
  },
  "elastictranscoder": {
    "name": "ElasticTranscoder",
    "cors": true
  },
  "firehose": {
    "name": "Firehose",
    "cors": true
  },
  "gamelift": {
    "name": "GameLift",
    "cors": true
  },
  "glacier": {
    "name": "Glacier"
  },
  "health": {
    "name": "Health"
  },
  "iam": {
    "name": "IAM",
    "cors": true
  },
  "importexport": {
    "name": "ImportExport"
  },
  "inspector": {
    "name": "Inspector",
    "versions": [
      "2015-08-18*"
    ],
    "cors": true
  },
  "iot": {
    "name": "Iot",
    "cors": true
  },
  "iotdata": {
    "prefix": "iot-data",
    "name": "IotData",
    "cors": true
  },
  "kinesis": {
    "name": "Kinesis",
    "cors": true
  },
  "kinesisanalytics": {
    "name": "KinesisAnalytics"
  },
  "kms": {
    "name": "KMS",
    "cors": true
  },
  "lambda": {
    "name": "Lambda",
    "cors": true
  },
  "lexruntime": {
    "prefix": "runtime.lex",
    "name": "LexRuntime",
    "cors": true
  },
  "lightsail": {
    "name": "Lightsail"
  },
  "machinelearning": {
    "name": "MachineLearning",
    "cors": true
  },
  "marketplacecommerceanalytics": {
    "name": "MarketplaceCommerceAnalytics",
    "cors": true
  },
  "marketplacemetering": {
    "prefix": "meteringmarketplace",
    "name": "MarketplaceMetering"
  },
  "mturk": {
    "prefix": "mturk-requester",
    "name": "MTurk",
    "cors": true
  },
  "mobileanalytics": {
    "name": "MobileAnalytics",
    "cors": true
  },
  "opsworks": {
    "name": "OpsWorks",
    "cors": true
  },
  "opsworkscm": {
    "name": "OpsWorksCM"
  },
  "organizations": {
    "name": "Organizations"
  },
  "pinpoint": {
    "name": "Pinpoint"
  },
  "polly": {
    "name": "Polly",
    "cors": true
  },
  "rds": {
    "name": "RDS",
    "versions": [
      "2014-09-01*"
    ],
    "cors": true
  },
  "redshift": {
    "name": "Redshift",
    "cors": true
  },
  "rekognition": {
    "name": "Rekognition",
    "cors": true
  },
  "resourcegroupstaggingapi": {
    "name": "ResourceGroupsTaggingAPI"
  },
  "route53": {
    "name": "Route53",
    "cors": true
  },
  "route53domains": {
    "name": "Route53Domains",
    "cors": true
  },
  "s3": {
    "name": "S3",
    "dualstackAvailable": true,
    "cors": true
  },
  "s3control": {
    "name": "S3Control",
    "dualstackAvailable": true,
    "xmlNoDefaultLists": true
  },
  "servicecatalog": {
    "name": "ServiceCatalog",
    "cors": true
  },
  "ses": {
    "prefix": "email",
    "name": "SES",
    "cors": true
  },
  "shield": {
    "name": "Shield"
  },
  "simpledb": {
    "prefix": "sdb",
    "name": "SimpleDB"
  },
  "sms": {
    "name": "SMS"
  },
  "snowball": {
    "name": "Snowball"
  },
  "sns": {
    "name": "SNS",
    "cors": true
  },
  "sqs": {
    "name": "SQS",
    "cors": true
  },
  "ssm": {
    "name": "SSM",
    "cors": true
  },
  "storagegateway": {
    "name": "StorageGateway",
    "cors": true
  },
  "stepfunctions": {
    "prefix": "states",
    "name": "StepFunctions"
  },
  "sts": {
    "name": "STS",
    "cors": true
  },
  "support": {
    "name": "Support"
  },
  "swf": {
    "name": "SWF"
  },
  "xray": {
    "name": "XRay",
    "cors": true
  },
  "waf": {
    "name": "WAF",
    "cors": true
  },
  "wafregional": {
    "prefix": "waf-regional",
    "name": "WAFRegional"
  },
  "workdocs": {
    "name": "WorkDocs",
    "cors": true
  },
  "workspaces": {
    "name": "WorkSpaces"
  },
  "codestar": {
    "name": "CodeStar"
  },
  "lexmodelbuildingservice": {
    "prefix": "lex-models",
    "name": "LexModelBuildingService",
    "cors": true
  },
  "marketplaceentitlementservice": {
    "prefix": "entitlement.marketplace",
    "name": "MarketplaceEntitlementService"
  },
  "athena": {
    "name": "Athena",
    "cors": true
  },
  "greengrass": {
    "name": "Greengrass"
  },
  "dax": {
    "name": "DAX"
  },
  "migrationhub": {
    "prefix": "AWSMigrationHub",
    "name": "MigrationHub"
  },
  "cloudhsmv2": {
    "name": "CloudHSMV2",
    "cors": true
  },
  "glue": {
    "name": "Glue"
  },
  "mobile": {
    "name": "Mobile"
  },
  "pricing": {
    "name": "Pricing",
    "cors": true
  },
  "costexplorer": {
    "prefix": "ce",
    "name": "CostExplorer",
    "cors": true
  },
  "mediaconvert": {
    "name": "MediaConvert"
  },
  "medialive": {
    "name": "MediaLive"
  },
  "mediapackage": {
    "name": "MediaPackage"
  },
  "mediastore": {
    "name": "MediaStore"
  },
  "mediastoredata": {
    "prefix": "mediastore-data",
    "name": "MediaStoreData",
    "cors": true
  },
  "appsync": {
    "name": "AppSync"
  },
  "guardduty": {
    "name": "GuardDuty"
  },
  "mq": {
    "name": "MQ"
  },
  "comprehend": {
    "name": "Comprehend",
    "cors": true
  },
  "iotjobsdataplane": {
    "prefix": "iot-jobs-data",
    "name": "IoTJobsDataPlane"
  },
  "kinesisvideoarchivedmedia": {
    "prefix": "kinesis-video-archived-media",
    "name": "KinesisVideoArchivedMedia",
    "cors": true
  },
  "kinesisvideomedia": {
    "prefix": "kinesis-video-media",
    "name": "KinesisVideoMedia",
    "cors": true
  },
  "kinesisvideo": {
    "name": "KinesisVideo",
    "cors": true
  },
  "sagemakerruntime": {
    "prefix": "runtime.sagemaker",
    "name": "SageMakerRuntime"
  },
  "sagemaker": {
    "name": "SageMaker"
  },
  "translate": {
    "name": "Translate",
    "cors": true
  },
  "resourcegroups": {
    "prefix": "resource-groups",
    "name": "ResourceGroups",
    "cors": true
  },
  "alexaforbusiness": {
    "name": "AlexaForBusiness"
  },
  "cloud9": {
    "name": "Cloud9"
  },
  "serverlessapplicationrepository": {
    "prefix": "serverlessrepo",
    "name": "ServerlessApplicationRepository"
  },
  "servicediscovery": {
    "name": "ServiceDiscovery"
  },
  "workmail": {
    "name": "WorkMail"
  },
  "autoscalingplans": {
    "prefix": "autoscaling-plans",
    "name": "AutoScalingPlans"
  },
  "transcribeservice": {
    "prefix": "transcribe",
    "name": "TranscribeService"
  },
  "connect": {
    "name": "Connect",
    "cors": true
  },
  "acmpca": {
    "prefix": "acm-pca",
    "name": "ACMPCA"
  },
  "fms": {
    "name": "FMS"
  },
  "secretsmanager": {
    "name": "SecretsManager",
    "cors": true
  },
  "iotanalytics": {
    "name": "IoTAnalytics",
    "cors": true
  },
  "iot1clickdevicesservice": {
    "prefix": "iot1click-devices",
    "name": "IoT1ClickDevicesService"
  },
  "iot1clickprojects": {
    "prefix": "iot1click-projects",
    "name": "IoT1ClickProjects"
  },
  "pi": {
    "name": "PI"
  },
  "neptune": {
    "name": "Neptune"
  },
  "mediatailor": {
    "name": "MediaTailor"
  },
  "eks": {
    "name": "EKS"
  },
  "macie": {
    "name": "Macie"
  },
  "dlm": {
    "name": "DLM"
  },
  "signer": {
    "name": "Signer"
  },
  "chime": {
    "name": "Chime"
  },
  "pinpointemail": {
    "prefix": "pinpoint-email",
    "name": "PinpointEmail"
  },
  "ram": {
    "name": "RAM"
  },
  "route53resolver": {
    "name": "Route53Resolver"
  },
  "pinpointsmsvoice": {
    "prefix": "sms-voice",
    "name": "PinpointSMSVoice"
  },
  "quicksight": {
    "name": "QuickSight"
  },
  "rdsdataservice": {
    "prefix": "rds-data",
    "name": "RDSDataService"
  },
  "amplify": {
    "name": "Amplify"
  },
  "datasync": {
    "name": "DataSync"
  },
  "robomaker": {
    "name": "RoboMaker"
  },
  "transfer": {
    "name": "Transfer"
  },
  "globalaccelerator": {
    "name": "GlobalAccelerator"
  },
  "comprehendmedical": {
    "name": "ComprehendMedical",
    "cors": true
  },
  "kinesisanalyticsv2": {
    "name": "KinesisAnalyticsV2"
  },
  "mediaconnect": {
    "name": "MediaConnect"
  },
  "fsx": {
    "name": "FSx"
  },
  "securityhub": {
    "name": "SecurityHub"
  },
  "appmesh": {
    "name": "AppMesh",
    "versions": [
      "2018-10-01*"
    ]
  },
  "licensemanager": {
    "prefix": "license-manager",
    "name": "LicenseManager"
  },
  "kafka": {
    "name": "Kafka"
  },
  "apigatewaymanagementapi": {
    "name": "ApiGatewayManagementApi"
  },
  "apigatewayv2": {
    "name": "ApiGatewayV2"
  },
  "docdb": {
    "name": "DocDB"
  },
  "backup": {
    "name": "Backup"
  },
  "worklink": {
    "name": "WorkLink"
  },
  "textract": {
    "name": "Textract"
  },
  "managedblockchain": {
    "name": "ManagedBlockchain"
  },
  "mediapackagevod": {
    "prefix": "mediapackage-vod",
    "name": "MediaPackageVod"
  },
  "groundstation": {
    "name": "GroundStation"
  },
  "iotthingsgraph": {
    "name": "IoTThingsGraph"
  },
  "iotevents": {
    "name": "IoTEvents"
  },
  "ioteventsdata": {
    "prefix": "iotevents-data",
    "name": "IoTEventsData"
  },
  "personalize": {
    "name": "Personalize",
    "cors": true
  },
  "personalizeevents": {
    "prefix": "personalize-events",
    "name": "PersonalizeEvents",
    "cors": true
  },
  "personalizeruntime": {
    "prefix": "personalize-runtime",
    "name": "PersonalizeRuntime",
    "cors": true
  },
  "applicationinsights": {
    "prefix": "application-insights",
    "name": "ApplicationInsights"
  },
  "servicequotas": {
    "prefix": "service-quotas",
    "name": "ServiceQuotas"
  },
  "ec2instanceconnect": {
    "prefix": "ec2-instance-connect",
    "name": "EC2InstanceConnect"
  },
  "eventbridge": {
    "name": "EventBridge"
  },
  "lakeformation": {
    "name": "LakeFormation"
  },
  "forecastservice": {
    "prefix": "forecast",
    "name": "ForecastService",
    "cors": true
  },
  "forecastqueryservice": {
    "prefix": "forecastquery",
    "name": "ForecastQueryService",
    "cors": true
  },
  "qldb": {
    "name": "QLDB"
  },
  "qldbsession": {
    "prefix": "qldb-session",
    "name": "QLDBSession"
  },
  "workmailmessageflow": {
    "name": "WorkMailMessageFlow"
  },
  "codestarnotifications": {
    "prefix": "codestar-notifications",
    "name": "CodeStarNotifications"
  },
  "savingsplans": {
    "name": "SavingsPlans"
  },
  "sso": {
    "name": "SSO"
  },
  "ssooidc": {
    "prefix": "sso-oidc",
    "name": "SSOOIDC"
  },
  "marketplacecatalog": {
    "prefix": "marketplace-catalog",
    "name": "MarketplaceCatalog",
    "cors": true
  },
  "dataexchange": {
    "name": "DataExchange"
  },
  "sesv2": {
    "name": "SESV2"
  },
  "migrationhubconfig": {
    "prefix": "migrationhub-config",
    "name": "MigrationHubConfig"
  },
  "connectparticipant": {
    "name": "ConnectParticipant"
  },
  "appconfig": {
    "name": "AppConfig"
  },
  "iotsecuretunneling": {
    "name": "IoTSecureTunneling"
  },
  "wafv2": {
    "name": "WAFV2"
  },
  "elasticinference": {
    "prefix": "elastic-inference",
    "name": "ElasticInference"
  },
  "imagebuilder": {
    "name": "Imagebuilder"
  },
  "schemas": {
    "name": "Schemas"
  },
  "accessanalyzer": {
    "name": "AccessAnalyzer"
  },
  "codegurureviewer": {
    "prefix": "codeguru-reviewer",
    "name": "CodeGuruReviewer"
  },
  "codeguruprofiler": {
    "name": "CodeGuruProfiler"
  },
  "computeoptimizer": {
    "prefix": "compute-optimizer",
    "name": "ComputeOptimizer"
  },
  "frauddetector": {
    "name": "FraudDetector"
  },
  "kendra": {
    "name": "Kendra"
  },
  "networkmanager": {
    "name": "NetworkManager"
  },
  "outposts": {
    "name": "Outposts"
  },
  "augmentedairuntime": {
    "prefix": "sagemaker-a2i-runtime",
    "name": "AugmentedAIRuntime"
  },
  "ebs": {
    "name": "EBS"
  },
  "kinesisvideosignalingchannels": {
    "prefix": "kinesis-video-signaling",
    "name": "KinesisVideoSignalingChannels",
    "cors": true
  },
  "detective": {
    "name": "Detective"
  },
  "codestarconnections": {
    "prefix": "codestar-connections",
    "name": "CodeStarconnections"
  },
  "synthetics": {
    "name": "Synthetics"
  },
  "iotsitewise": {
    "name": "IoTSiteWise"
  },
  "macie2": {
    "name": "Macie2"
  },
  "codeartifact": {
    "name": "CodeArtifact"
  },
  "honeycode": {
    "name": "Honeycode"
  },
  "ivs": {
    "name": "IVS"
  },
  "braket": {
    "name": "Braket"
  },
  "identitystore": {
    "name": "IdentityStore"
  },
  "appflow": {
    "name": "Appflow"
  },
  "redshiftdata": {
    "prefix": "redshift-data",
    "name": "RedshiftData"
  },
  "ssoadmin": {
    "prefix": "sso-admin",
    "name": "SSOAdmin"
  },
  "timestreamquery": {
    "prefix": "timestream-query",
    "name": "TimestreamQuery"
  },
  "timestreamwrite": {
    "prefix": "timestream-write",
    "name": "TimestreamWrite"
  },
  "s3outposts": {
    "name": "S3Outposts"
  },
  "databrew": {
    "name": "DataBrew"
  },
  "servicecatalogappregistry": {
    "prefix": "servicecatalog-appregistry",
    "name": "ServiceCatalogAppRegistry"
  },
  "networkfirewall": {
    "prefix": "network-firewall",
    "name": "NetworkFirewall"
  },
  "mwaa": {
    "name": "MWAA"
  },
  "amplifybackend": {
    "name": "AmplifyBackend"
  },
  "appintegrations": {
    "name": "AppIntegrations"
  },
  "connectcontactlens": {
    "prefix": "connect-contact-lens",
    "name": "ConnectContactLens"
  },
  "devopsguru": {
    "prefix": "devops-guru",
    "name": "DevOpsGuru"
  },
  "ecrpublic": {
    "prefix": "ecr-public",
    "name": "ECRPUBLIC"
  },
  "lookoutvision": {
    "name": "LookoutVision"
  },
  "sagemakerfeaturestoreruntime": {
    "prefix": "sagemaker-featurestore-runtime",
    "name": "SageMakerFeatureStoreRuntime"
  },
  "customerprofiles": {
    "prefix": "customer-profiles",
    "name": "CustomerProfiles"
  },
  "auditmanager": {
    "name": "AuditManager"
  },
  "emrcontainers": {
    "prefix": "emr-containers",
    "name": "EMRcontainers"
  },
  "healthlake": {
    "name": "HealthLake"
  },
  "sagemakeredge": {
    "prefix": "sagemaker-edge",
    "name": "SagemakerEdge"
  },
  "amp": {
    "name": "Amp",
    "cors": true
  },
  "greengrassv2": {
    "name": "GreengrassV2"
  },
  "iotdeviceadvisor": {
    "name": "IotDeviceAdvisor"
  },
  "iotfleethub": {
    "name": "IoTFleetHub"
  },
  "iotwireless": {
    "name": "IoTWireless"
  },
  "location": {
    "name": "Location",
    "cors": true
  },
  "wellarchitected": {
    "name": "WellArchitected"
  },
  "lexmodelsv2": {
    "prefix": "models.lex.v2",
    "name": "LexModelsV2"
  },
  "lexruntimev2": {
    "prefix": "runtime.lex.v2",
    "name": "LexRuntimeV2",
    "cors": true
  },
  "fis": {
    "name": "Fis"
  },
  "lookoutmetrics": {
    "name": "LookoutMetrics"
  },
  "mgn": {
    "name": "Mgn"
  },
  "lookoutequipment": {
    "name": "LookoutEquipment"
  },
  "nimble": {
    "name": "Nimble"
  },
  "finspace": {
    "name": "Finspace"
  },
  "finspacedata": {
    "prefix": "finspace-data",
    "name": "Finspacedata"
  },
  "ssmcontacts": {
    "prefix": "ssm-contacts",
    "name": "SSMContacts"
  },
  "ssmincidents": {
    "prefix": "ssm-incidents",
    "name": "SSMIncidents"
  },
  "applicationcostprofiler": {
    "name": "ApplicationCostProfiler"
  },
  "apprunner": {
    "name": "AppRunner"
  },
  "proton": {
    "name": "Proton"
  },
  "route53recoverycluster": {
    "prefix": "route53-recovery-cluster",
    "name": "Route53RecoveryCluster"
  },
  "route53recoverycontrolconfig": {
    "prefix": "route53-recovery-control-config",
    "name": "Route53RecoveryControlConfig"
  },
  "route53recoveryreadiness": {
    "prefix": "route53-recovery-readiness",
    "name": "Route53RecoveryReadiness"
  },
  "chimesdkidentity": {
    "prefix": "chime-sdk-identity",
    "name": "ChimeSDKIdentity"
  },
  "chimesdkmessaging": {
    "prefix": "chime-sdk-messaging",
    "name": "ChimeSDKMessaging"
  },
  "snowdevicemanagement": {
    "prefix": "snow-device-management",
    "name": "SnowDeviceManagement"
  },
  "memorydb": {
    "name": "MemoryDB"
  },
  "opensearch": {
    "name": "OpenSearch"
  },
  "kafkaconnect": {
    "name": "KafkaConnect"
  },
  "voiceid": {
    "prefix": "voice-id",
    "name": "VoiceID"
  },
  "wisdom": {
    "name": "Wisdom"
  },
  "account": {
    "name": "Account"
  },
  "cloudcontrol": {
    "name": "CloudControl"
  },
  "grafana": {
    "name": "Grafana"
  },
  "panorama": {
    "name": "Panorama"
  },
  "chimesdkmeetings": {
    "prefix": "chime-sdk-meetings",
    "name": "ChimeSDKMeetings"
  },
  "resiliencehub": {
    "name": "Resiliencehub"
  },
  "migrationhubstrategy": {
    "name": "MigrationHubStrategy"
  },
  "appconfigdata": {
    "name": "AppConfigData"
  },
  "drs": {
    "name": "Drs"
  },
  "migrationhubrefactorspaces": {
    "prefix": "migration-hub-refactor-spaces",
    "name": "MigrationHubRefactorSpaces"
  },
  "evidently": {
    "name": "Evidently"
  },
  "inspector2": {
    "name": "Inspector2"
  },
  "rbin": {
    "name": "Rbin"
  },
  "rum": {
    "name": "RUM"
  },
  "backupgateway": {
    "prefix": "backup-gateway",
    "name": "BackupGateway"
  },
  "iottwinmaker": {
    "name": "IoTTwinMaker"
  },
  "workspacesweb": {
    "prefix": "workspaces-web",
    "name": "WorkSpacesWeb"
  },
  "amplifyuibuilder": {
    "name": "AmplifyUIBuilder"
  },
  "keyspaces": {
    "name": "Keyspaces"
  },
  "billingconductor": {
    "name": "Billingconductor"
  },
  "gamesparks": {
    "name": "GameSparks"
  },
  "pinpointsmsvoicev2": {
    "prefix": "pinpoint-sms-voice-v2",
    "name": "PinpointSMSVoiceV2"
  },
  "ivschat": {
    "name": "Ivschat"
  },
  "chimesdkmediapipelines": {
    "prefix": "chime-sdk-media-pipelines",
    "name": "ChimeSDKMediaPipelines"
  },
  "emrserverless": {
    "prefix": "emr-serverless",
    "name": "EMRServerless"
  },
  "m2": {
    "name": "M2"
  },
  "connectcampaigns": {
    "name": "ConnectCampaigns"
  },
  "redshiftserverless": {
    "prefix": "redshift-serverless",
    "name": "RedshiftServerless"
  },
  "rolesanywhere": {
    "name": "RolesAnywhere"
  },
  "licensemanagerusersubscriptions": {
    "prefix": "license-manager-user-subscriptions",
    "name": "LicenseManagerUserSubscriptions"
  },
  "backupstorage": {
    "name": "BackupStorage"
  },
  "privatenetworks": {
    "name": "PrivateNetworks"
  },
  "supportapp": {
    "prefix": "support-app",
    "name": "SupportApp"
  },
  "controltower": {
    "name": "ControlTower"
  },
  "iotfleetwise": {
    "name": "IoTFleetWise"
  },
  "migrationhuborchestrator": {
    "name": "MigrationHubOrchestrator"
  },
  "connectcases": {
    "name": "ConnectCases"
  },
  "resourceexplorer2": {
    "prefix": "resource-explorer-2",
    "name": "ResourceExplorer2"
  },
  "scheduler": {
    "name": "Scheduler"
  },
  "chimesdkvoice": {
    "prefix": "chime-sdk-voice",
    "name": "ChimeSDKVoice"
  },
  "iotroborunner": {
    "prefix": "iot-roborunner",
    "name": "IoTRoboRunner"
  },
  "ssmsap": {
    "prefix": "ssm-sap",
    "name": "SsmSap"
  },
  "oam": {
    "name": "OAM"
  },
  "arczonalshift": {
    "prefix": "arc-zonal-shift",
    "name": "ARCZonalShift"
  },
  "omics": {
    "name": "Omics"
  },
  "opensearchserverless": {
    "name": "OpenSearchServerless"
  },
  "securitylake": {
    "name": "SecurityLake"
  },
  "simspaceweaver": {
    "name": "SimSpaceWeaver"
  },
  "docdbelastic": {
    "prefix": "docdb-elastic",
    "name": "DocDBElastic"
  },
  "sagemakergeospatial": {
    "prefix": "sagemaker-geospatial",
    "name": "SageMakerGeospatial"
  },
  "codecatalyst": {
    "name": "CodeCatalyst"
  },
  "pipes": {
    "name": "Pipes"
  },
  "sagemakermetrics": {
    "prefix": "sagemaker-metrics",
    "name": "SageMakerMetrics"
  },
  "kinesisvideowebrtcstorage": {
    "prefix": "kinesis-video-webrtc-storage",
    "name": "KinesisVideoWebRTCStorage"
  },
  "licensemanagerlinuxsubscriptions": {
    "prefix": "license-manager-linux-subscriptions",
    "name": "LicenseManagerLinuxSubscriptions"
  },
  "kendraranking": {
    "prefix": "kendra-ranking",
    "name": "KendraRanking"
  },
  "cleanrooms": {
    "name": "CleanRooms"
  },
  "cloudtraildata": {
    "prefix": "cloudtrail-data",
    "name": "CloudTrailData"
  },
  "tnb": {
    "name": "Tnb"
  },
  "internetmonitor": {
    "name": "InternetMonitor"
  },
  "ivsrealtime": {
    "prefix": "ivs-realtime",
    "name": "IVSRealTime"
  },
  "vpclattice": {
    "prefix": "vpc-lattice",
    "name": "VPCLattice"
  },
  "osis": {
    "name": "OSIS"
  },
  "mediapackagev2": {
    "name": "MediaPackageV2"
  },
  "paymentcryptography": {
    "prefix": "payment-cryptography",
    "name": "PaymentCryptography"
  },
  "paymentcryptographydata": {
    "prefix": "payment-cryptography-data",
    "name": "PaymentCryptographyData"
  },
  "codegurusecurity": {
    "prefix": "codeguru-security",
    "name": "CodeGuruSecurity"
  },
  "verifiedpermissions": {
    "name": "VerifiedPermissions"
  },
  "appfabric": {
    "name": "AppFabric"
  },
  "medicalimaging": {
    "prefix": "medical-imaging",
    "name": "MedicalImaging"
  },
  "entityresolution": {
    "name": "EntityResolution"
  },
  "managedblockchainquery": {
    "prefix": "managedblockchain-query",
    "name": "ManagedBlockchainQuery"
  },
  "neptunedata": {
    "name": "Neptunedata"
  },
  "pcaconnectorad": {
    "prefix": "pca-connector-ad",
    "name": "PcaConnectorAd"
  },
  "bedrock": {
    "name": "Bedrock"
  },
  "bedrockruntime": {
    "prefix": "bedrock-runtime",
    "name": "BedrockRuntime"
  },
  "datazone": {
    "name": "DataZone"
  }
}
},{}],23:[function(require,module,exports){
module.exports={
  "version": "2.0",
  "metadata": {
    "apiVersion": "2011-06-15",
    "endpointPrefix": "sts",
    "globalEndpoint": "sts.amazonaws.com",
    "protocol": "query",
    "serviceAbbreviation": "AWS STS",
    "serviceFullName": "AWS Security Token Service",
    "serviceId": "STS",
    "signatureVersion": "v4",
    "uid": "sts-2011-06-15",
    "xmlNamespace": "https://sts.amazonaws.com/doc/2011-06-15/"
  },
  "operations": {
    "AssumeRole": {
      "input": {
        "type": "structure",
        "required": [
          "RoleArn",
          "RoleSessionName"
        ],
        "members": {
          "RoleArn": {},
          "RoleSessionName": {},
          "PolicyArns": {
            "shape": "S4"
          },
          "Policy": {},
          "DurationSeconds": {
            "type": "integer"
          },
          "Tags": {
            "shape": "S8"
          },
          "TransitiveTagKeys": {
            "type": "list",
            "member": {}
          },
          "ExternalId": {},
          "SerialNumber": {},
          "TokenCode": {},
          "SourceIdentity": {},
          "ProvidedContexts": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "ProviderArn": {},
                "ContextAssertion": {}
              }
            }
          }
        }
      },
      "output": {
        "resultWrapper": "AssumeRoleResult",
        "type": "structure",
        "members": {
          "Credentials": {
            "shape": "Sl"
          },
          "AssumedRoleUser": {
            "shape": "Sq"
          },
          "PackedPolicySize": {
            "type": "integer"
          },
          "SourceIdentity": {}
        }
      }
    },
    "AssumeRoleWithSAML": {
      "input": {
        "type": "structure",
        "required": [
          "RoleArn",
          "PrincipalArn",
          "SAMLAssertion"
        ],
        "members": {
          "RoleArn": {},
          "PrincipalArn": {},
          "SAMLAssertion": {
            "type": "string",
            "sensitive": true
          },
          "PolicyArns": {
            "shape": "S4"
          },
          "Policy": {},
          "DurationSeconds": {
            "type": "integer"
          }
        }
      },
      "output": {
        "resultWrapper": "AssumeRoleWithSAMLResult",
        "type": "structure",
        "members": {
          "Credentials": {
            "shape": "Sl"
          },
          "AssumedRoleUser": {
            "shape": "Sq"
          },
          "PackedPolicySize": {
            "type": "integer"
          },
          "Subject": {},
          "SubjectType": {},
          "Issuer": {},
          "Audience": {},
          "NameQualifier": {},
          "SourceIdentity": {}
        }
      }
    },
    "AssumeRoleWithWebIdentity": {
      "input": {
        "type": "structure",
        "required": [
          "RoleArn",
          "RoleSessionName",
          "WebIdentityToken"
        ],
        "members": {
          "RoleArn": {},
          "RoleSessionName": {},
          "WebIdentityToken": {
            "type": "string",
            "sensitive": true
          },
          "ProviderId": {},
          "PolicyArns": {
            "shape": "S4"
          },
          "Policy": {},
          "DurationSeconds": {
            "type": "integer"
          }
        }
      },
      "output": {
        "resultWrapper": "AssumeRoleWithWebIdentityResult",
        "type": "structure",
        "members": {
          "Credentials": {
            "shape": "Sl"
          },
          "SubjectFromWebIdentityToken": {},
          "AssumedRoleUser": {
            "shape": "Sq"
          },
          "PackedPolicySize": {
            "type": "integer"
          },
          "Provider": {},
          "Audience": {},
          "SourceIdentity": {}
        }
      }
    },
    "DecodeAuthorizationMessage": {
      "input": {
        "type": "structure",
        "required": [
          "EncodedMessage"
        ],
        "members": {
          "EncodedMessage": {}
        }
      },
      "output": {
        "resultWrapper": "DecodeAuthorizationMessageResult",
        "type": "structure",
        "members": {
          "DecodedMessage": {}
        }
      }
    },
    "GetAccessKeyInfo": {
      "input": {
        "type": "structure",
        "required": [
          "AccessKeyId"
        ],
        "members": {
          "AccessKeyId": {}
        }
      },
      "output": {
        "resultWrapper": "GetAccessKeyInfoResult",
        "type": "structure",
        "members": {
          "Account": {}
        }
      }
    },
    "GetCallerIdentity": {
      "input": {
        "type": "structure",
        "members": {}
      },
      "output": {
        "resultWrapper": "GetCallerIdentityResult",
        "type": "structure",
        "members": {
          "UserId": {},
          "Account": {},
          "Arn": {}
        }
      }
    },
    "GetFederationToken": {
      "input": {
        "type": "structure",
        "required": [
          "Name"
        ],
        "members": {
          "Name": {},
          "Policy": {},
          "PolicyArns": {
            "shape": "S4"
          },
          "DurationSeconds": {
            "type": "integer"
          },
          "Tags": {
            "shape": "S8"
          }
        }
      },
      "output": {
        "resultWrapper": "GetFederationTokenResult",
        "type": "structure",
        "members": {
          "Credentials": {
            "shape": "Sl"
          },
          "FederatedUser": {
            "type": "structure",
            "required": [
              "FederatedUserId",
              "Arn"
            ],
            "members": {
              "FederatedUserId": {},
              "Arn": {}
            }
          },
          "PackedPolicySize": {
            "type": "integer"
          }
        }
      }
    },
    "GetSessionToken": {
      "input": {
        "type": "structure",
        "members": {
          "DurationSeconds": {
            "type": "integer"
          },
          "SerialNumber": {},
          "TokenCode": {}
        }
      },
      "output": {
        "resultWrapper": "GetSessionTokenResult",
        "type": "structure",
        "members": {
          "Credentials": {
            "shape": "Sl"
          }
        }
      }
    }
  },
  "shapes": {
    "S4": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "arn": {}
        }
      }
    },
    "S8": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "Key",
          "Value"
        ],
        "members": {
          "Key": {},
          "Value": {}
        }
      }
    },
    "Sl": {
      "type": "structure",
      "required": [
        "AccessKeyId",
        "SecretAccessKey",
        "SessionToken",
        "Expiration"
      ],
      "members": {
        "AccessKeyId": {},
        "SecretAccessKey": {
          "type": "string",
          "sensitive": true
        },
        "SessionToken": {},
        "Expiration": {
          "type": "timestamp"
        }
      }
    },
    "Sq": {
      "type": "structure",
      "required": [
        "AssumedRoleId",
        "Arn"
      ],
      "members": {
        "AssumedRoleId": {},
        "Arn": {}
      }
    }
  }
}
},{}],24:[function(require,module,exports){
module.exports={
  "pagination": {
  }
}

},{}],25:[function(require,module,exports){
"use strict";require("../lib/node_loader");var AWS=require("../lib/core"),Service=AWS.Service,apiLoader=AWS.apiLoader;apiLoader.services.cognitoidentity={},AWS.CognitoIdentity=Service.defineService("cognitoidentity",["2014-06-30"]),Object.defineProperty(apiLoader.services.cognitoidentity,"2014-06-30",{get:function(){var e=require("../apis/cognito-identity-2014-06-30.min.json");return e.paginators=require("../apis/cognito-identity-2014-06-30.paginators.json").pagination,e},enumerable:!0,configurable:!0}),module.exports=AWS.CognitoIdentity;

},{"../apis/cognito-identity-2014-06-30.min.json":14,"../apis/cognito-identity-2014-06-30.paginators.json":15,"../lib/core":31,"../lib/node_loader":82}],26:[function(require,module,exports){
"use strict";require("../lib/node_loader");var AWS=require("../lib/core"),Service=AWS.Service,apiLoader=AWS.apiLoader;apiLoader.services.dynamodb={},AWS.DynamoDB=Service.defineService("dynamodb",["2011-12-05","2012-08-10"]),require("../lib/services/dynamodb"),Object.defineProperty(apiLoader.services.dynamodb,"2011-12-05",{get:function(){var e=require("../apis/dynamodb-2011-12-05.min.json");return e.paginators=require("../apis/dynamodb-2011-12-05.paginators.json").pagination,e.waiters=require("../apis/dynamodb-2011-12-05.waiters2.json").waiters,e},enumerable:!0,configurable:!0}),Object.defineProperty(apiLoader.services.dynamodb,"2012-08-10",{get:function(){var e=require("../apis/dynamodb-2012-08-10.min.json");return e.paginators=require("../apis/dynamodb-2012-08-10.paginators.json").pagination,e.waiters=require("../apis/dynamodb-2012-08-10.waiters2.json").waiters,e},enumerable:!0,configurable:!0}),module.exports=AWS.DynamoDB;

},{"../apis/dynamodb-2011-12-05.min.json":16,"../apis/dynamodb-2011-12-05.paginators.json":17,"../apis/dynamodb-2011-12-05.waiters2.json":18,"../apis/dynamodb-2012-08-10.min.json":19,"../apis/dynamodb-2012-08-10.paginators.json":20,"../apis/dynamodb-2012-08-10.waiters2.json":21,"../lib/core":31,"../lib/node_loader":82,"../lib/services/dynamodb":102}],27:[function(require,module,exports){
"use strict";require("../lib/node_loader");var AWS=require("../lib/core"),Service=AWS.Service,apiLoader=AWS.apiLoader;apiLoader.services.sts={},AWS.STS=Service.defineService("sts",["2011-06-15"]),require("../lib/services/sts"),Object.defineProperty(apiLoader.services.sts,"2011-06-15",{get:function(){var e=require("../apis/sts-2011-06-15.min.json");return e.paginators=require("../apis/sts-2011-06-15.paginators.json").pagination,e},enumerable:!0,configurable:!0}),module.exports=AWS.STS;

},{"../apis/sts-2011-06-15.min.json":23,"../apis/sts-2011-06-15.paginators.json":24,"../lib/core":31,"../lib/node_loader":82,"../lib/services/sts":103}],28:[function(require,module,exports){
"use strict";function apiLoader(e,r){if(!apiLoader.services.hasOwnProperty(e))throw new Error("InvalidService: Failed to load api for "+e);return apiLoader.services[e][r]}apiLoader.services={},module.exports=apiLoader;

},{}],29:[function(require,module,exports){
"use strict";var PromisesDependency,AWS=require("./core");require("./credentials"),require("./credentials/credential_provider_chain"),AWS.Config=AWS.util.inherit({constructor:function(e){void 0===e&&(e={}),e=this.extractCredentials(e),AWS.util.each.call(this,this.keys,function(n,t){this.set(n,e[n],t)})},getCredentials:function(e){var n,t=this;function i(n){e(n,n?null:t.credentials)}function o(e,n){return new AWS.util.error(n||new Error,{code:"CredentialsError",message:e,name:"CredentialsError"})}t.credentials?"function"==typeof t.credentials.get?t.credentials.get(function(e){e&&(e=o("Could not load credentials from "+t.credentials.constructor.name,e)),i(e)}):(n=null,t.credentials.accessKeyId&&t.credentials.secretAccessKey||(n=o("Missing credentials")),i(n)):t.credentialProvider?t.credentialProvider.resolve(function(e,n){e&&(e=o("Could not load credentials from any providers",e)),t.credentials=n,i(e)}):i(o("No credentials to load"))},getToken:function(e){var n,t=this;function i(n){e(n,n?null:t.token)}function o(e,n){return new AWS.util.error(n||new Error,{code:"TokenError",message:e,name:"TokenError"})}t.token?"function"==typeof t.token.get?t.token.get(function(e){e&&(e=o("Could not load token from "+t.token.constructor.name,e)),i(e)}):(n=null,t.token.token||(n=o("Missing token")),i(n)):t.tokenProvider?t.tokenProvider.resolve(function(e,n){e&&(e=o("Could not load token from any providers",e)),t.token=n,i(e)}):i(o("No token to load"))},update:function(e,n){n=n||!1,e=this.extractCredentials(e),AWS.util.each.call(this,e,function(e,t){(n||Object.prototype.hasOwnProperty.call(this.keys,e)||AWS.Service.hasService(e))&&this.set(e,t)})},loadFromPath:function(e){this.clear();var n=JSON.parse(AWS.util.readFileSync(e)),t=new AWS.FileSystemCredentials(e),i=new AWS.CredentialProviderChain;return i.providers.unshift(t),i.resolve(function(e,t){if(e)throw e;n.credentials=t}),this.constructor(n),this},clear:function(){AWS.util.each.call(this,this.keys,function(e){delete this[e]}),this.set("credentials",void 0),this.set("credentialProvider",void 0)},set:function(e,n,t){void 0===n?(void 0===t&&(t=this.keys[e]),this[e]="function"==typeof t?t.call(this):t):"httpOptions"===e&&this[e]?this[e]=AWS.util.merge(this[e],n):this[e]=n},keys:{credentials:null,credentialProvider:null,region:null,logger:null,apiVersions:{},apiVersion:null,endpoint:void 0,httpOptions:{timeout:12e4},maxRetries:void 0,maxRedirects:10,paramValidation:!0,sslEnabled:!0,s3ForcePathStyle:!1,s3BucketEndpoint:!1,s3DisableBodySigning:!0,s3UsEast1RegionalEndpoint:"legacy",s3UseArnRegion:void 0,computeChecksums:!0,convertResponseTypes:!0,correctClockSkew:!1,customUserAgent:null,dynamoDbCrc32:!0,systemClockOffset:0,signatureVersion:null,signatureCache:!0,retryDelayOptions:{},useAccelerateEndpoint:!1,clientSideMonitoring:!1,endpointDiscoveryEnabled:void 0,endpointCacheSize:1e3,hostPrefixEnabled:!0,stsRegionalEndpoints:"legacy",useFipsEndpoint:!1,useDualstackEndpoint:!1,token:null},extractCredentials:function(e){return e.accessKeyId&&e.secretAccessKey&&((e=AWS.util.copy(e)).credentials=new AWS.Credentials(e)),e},setPromisesDependency:function(e){PromisesDependency=e,null===e&&"function"==typeof Promise&&(PromisesDependency=Promise);var n=[AWS.Request,AWS.Credentials,AWS.CredentialProviderChain];AWS.S3&&(n.push(AWS.S3),AWS.S3.ManagedUpload&&n.push(AWS.S3.ManagedUpload)),AWS.util.addPromises(n,PromisesDependency)},getPromisesDependency:function(){return PromisesDependency}}),AWS.config=new AWS.Config;

},{"./core":31,"./credentials":32,"./credentials/credential_provider_chain":35}],30:[function(require,module,exports){
"use strict";var AWS=require("./core");function validateRegionalEndpointsFlagValue(e,n){if("string"==typeof e){if(["legacy","regional"].indexOf(e.toLowerCase())>=0)return e.toLowerCase();throw AWS.util.error(new Error,n)}}function resolveRegionalEndpointsFlag(e,n){var i;if((e=e||{})[n.clientConfig]&&(i=validateRegionalEndpointsFlagValue(e[n.clientConfig],{code:"InvalidConfiguration",message:'invalid "'+n.clientConfig+'" configuration. Expect "legacy"  or "regional". Got "'+e[n.clientConfig]+'".'})))return i;if(!AWS.util.isNode())return i;if(Object.prototype.hasOwnProperty.call(process.env,n.env)&&(i=validateRegionalEndpointsFlagValue(process.env[n.env],{code:"InvalidEnvironmentalVariable",message:"invalid "+n.env+' environmental variable. Expect "legacy"  or "regional". Got "'+process.env[n.env]+'".'})))return i;var o={};try{o=AWS.util.getProfilesFromSharedConfig(AWS.util.iniLoader)[process.env.AWS_PROFILE||AWS.util.defaultProfile]}catch(e){}if(o&&Object.prototype.hasOwnProperty.call(o,n.sharedConfig)&&(i=validateRegionalEndpointsFlagValue(o[n.sharedConfig],{code:"InvalidConfiguration",message:"invalid "+n.sharedConfig+' profile config. Expect "legacy"  or "regional". Got "'+o[n.sharedConfig]+'".'})))return i;return i}module.exports=resolveRegionalEndpointsFlag;

},{"./core":31}],31:[function(require,module,exports){
"use strict";var AWS={util:require("./util")},_hidden={};_hidden.toString(),module.exports=AWS,AWS.util.update(AWS,{VERSION:"2.1473.0",Signers:{},Protocol:{Json:require("./protocol/json"),Query:require("./protocol/query"),Rest:require("./protocol/rest"),RestJson:require("./protocol/rest_json"),RestXml:require("./protocol/rest_xml")},XML:{Builder:require("./xml/builder"),Parser:null},JSON:{Builder:require("./json/builder"),Parser:require("./json/parser")},Model:{Api:require("./model/api"),Operation:require("./model/operation"),Shape:require("./model/shape"),Paginator:require("./model/paginator"),ResourceWaiter:require("./model/resource_waiter")},apiLoader:require("./api_loader"),EndpointCache:require("../vendor/endpoint-cache").EndpointCache}),require("./sequential_executor"),require("./service"),require("./config"),require("./http"),require("./event_listeners"),require("./request"),require("./response"),require("./resource_waiter"),require("./signers/request_signer"),require("./param_validator"),require("./maintenance_mode_message"),AWS.events=new AWS.SequentialExecutor,AWS.util.memoizedProperty(AWS,"endpointCache",function(){return new AWS.EndpointCache(AWS.config.endpointCacheSize)},!0);

},{"../vendor/endpoint-cache":126,"./api_loader":28,"./config":29,"./event_listeners":64,"./http":65,"./json/builder":67,"./json/parser":68,"./maintenance_mode_message":69,"./model/api":76,"./model/operation":78,"./model/paginator":79,"./model/resource_waiter":80,"./model/shape":81,"./param_validator":83,"./protocol/json":85,"./protocol/query":86,"./protocol/rest":87,"./protocol/rest_json":88,"./protocol/rest_xml":89,"./request":97,"./resource_waiter":98,"./response":99,"./sequential_executor":100,"./service":101,"./signers/request_signer":108,"./util":119,"./xml/builder":120}],32:[function(require,module,exports){
"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var AWS=require("./core");AWS.Credentials=AWS.util.inherit({constructor:function(){if(AWS.util.hideProperties(this,["secretAccessKey"]),this.expired=!1,this.expireTime=null,this.refreshCallbacks=[],1===arguments.length&&"object"===_typeof(arguments[0])){var e=arguments[0].credentials||arguments[0];this.accessKeyId=e.accessKeyId,this.secretAccessKey=e.secretAccessKey,this.sessionToken=e.sessionToken}else this.accessKeyId=arguments[0],this.secretAccessKey=arguments[1],this.sessionToken=arguments[2]},expiryWindow:15,needsRefresh:function(){var e=AWS.util.date.getDate().getTime(),t=new Date(e+1e3*this.expiryWindow);return!!(this.expireTime&&t>this.expireTime)||(this.expired||!this.accessKeyId||!this.secretAccessKey)},get:function(e){var t=this;this.needsRefresh()?this.refresh(function(s){s||(t.expired=!1),e&&e(s)}):e&&e()},refresh:function(e){this.expired=!1,e()},coalesceRefresh:function(e,t){var s=this;1===s.refreshCallbacks.push(e)&&s.load(function(e){AWS.util.arrayEach(s.refreshCallbacks,function(s){t?s(e):AWS.util.defer(function(){s(e)})}),s.refreshCallbacks.length=0})},load:function(e){e()}}),AWS.Credentials.addPromisesToClass=function(e){this.prototype.getPromise=AWS.util.promisifyMethod("get",e),this.prototype.refreshPromise=AWS.util.promisifyMethod("refresh",e)},AWS.Credentials.deletePromisesFromClass=function(){delete this.prototype.getPromise,delete this.prototype.refreshPromise},AWS.util.addPromises(AWS.Credentials);

},{"./core":31}],33:[function(require,module,exports){
"use strict";var AWS=require("../core"),STS=require("../../clients/sts");AWS.ChainableTemporaryCredentials=AWS.util.inherit(AWS.Credentials,{constructor:function(e){AWS.Credentials.call(this),e=e||{},this.errorCode="ChainableTemporaryCredentialsProviderFailure",this.expired=!0,this.tokenCodeFn=null;var r=AWS.util.copy(e.params)||{};if(r.RoleArn&&(r.RoleSessionName=r.RoleSessionName||"temporary-credentials"),r.SerialNumber){if(!e.tokenCodeFn||"function"!=typeof e.tokenCodeFn)throw new AWS.util.error(new Error("tokenCodeFn must be a function when params.SerialNumber is given"),{code:this.errorCode});this.tokenCodeFn=e.tokenCodeFn}var n=AWS.util.merge({params:r,credentials:e.masterCredentials||AWS.config.credentials},e.stsConfig||{});this.service=new STS(n)},refresh:function(e){this.coalesceRefresh(e||AWS.util.fn.callback)},load:function(e){var r=this,n=r.service.config.params.RoleArn?"assumeRole":"getSessionToken";this.getTokenCode(function(o,i){var t={};o?e(o):(i&&(t.TokenCode=i),r.service[n](t,function(n,o){n||r.service.credentialsFrom(o,r),e(n)}))})},getTokenCode:function(e){var r=this;this.tokenCodeFn?this.tokenCodeFn(this.service.config.params.SerialNumber,function(n,o){if(n){var i=n;return n instanceof Error&&(i=n.message),void e(AWS.util.error(new Error("Error fetching MFA token: "+i),{code:r.errorCode}))}e(null,o)}):e(null)}});

},{"../../clients/sts":27,"../core":31}],34:[function(require,module,exports){
"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var AWS=require("../core"),CognitoIdentity=require("../../clients/cognitoidentity"),STS=require("../../clients/sts");AWS.CognitoIdentityCredentials=AWS.util.inherit(AWS.Credentials,{localStorageKey:{id:"aws.cognito.identity-id.",providers:"aws.cognito.identity-providers."},constructor:function(t,e){AWS.Credentials.call(this),this.expired=!0,this.params=t,this.data=null,this._identityId=null,this._clientConfig=AWS.util.copy(e||{}),this.loadCachedId();var i=this;Object.defineProperty(this,"identityId",{get:function(){return i.loadCachedId(),i._identityId||i.params.IdentityId},set:function(t){i._identityId=t}})},refresh:function(t){this.coalesceRefresh(t||AWS.util.fn.callback)},load:function(t){var e=this;e.createClients(),e.data=null,e._identityId=null,e.getId(function(i){i?(e.clearIdOnNotAuthorized(i),t(i)):e.params.RoleArn?e.getCredentialsFromSTS(t):e.getCredentialsForIdentity(t)})},clearCachedId:function(){this._identityId=null,delete this.params.IdentityId;var t=this.params.IdentityPoolId,e=this.params.LoginId||"";delete this.storage[this.localStorageKey.id+t+e],delete this.storage[this.localStorageKey.providers+t+e]},clearIdOnNotAuthorized:function(t){"NotAuthorizedException"==t.code&&this.clearCachedId()},getId:function(t){var e=this;if("string"==typeof e.params.IdentityId)return t(null,e.params.IdentityId);e.cognito.getId(function(i,n){!i&&n.IdentityId?(e.params.IdentityId=n.IdentityId,t(null,n.IdentityId)):t(i)})},loadCredentials:function(t,e){t&&e&&(e.expired=!1,e.accessKeyId=t.Credentials.AccessKeyId,e.secretAccessKey=t.Credentials.SecretKey,e.sessionToken=t.Credentials.SessionToken,e.expireTime=t.Credentials.Expiration)},getCredentialsForIdentity:function(t){var e=this;e.cognito.getCredentialsForIdentity(function(i,n){i?e.clearIdOnNotAuthorized(i):(e.cacheId(n),e.data=n,e.loadCredentials(e.data,e)),t(i)})},getCredentialsFromSTS:function(t){var e=this;e.cognito.getOpenIdToken(function(i,n){i?(e.clearIdOnNotAuthorized(i),t(i)):(e.cacheId(n),e.params.WebIdentityToken=n.Token,e.webIdentityCredentials.refresh(function(i){i||(e.data=e.webIdentityCredentials.data,e.sts.credentialsFrom(e.data,e)),t(i)}))})},loadCachedId:function(){if(AWS.util.isBrowser()&&!this.params.IdentityId){var t=this.getStorage("id");if(t&&this.params.Logins){var e=Object.keys(this.params.Logins);0!==(this.getStorage("providers")||"").split(",").filter(function(t){return-1!==e.indexOf(t)}).length&&(this.params.IdentityId=t)}else t&&(this.params.IdentityId=t)}},createClients:function(){var t=this._clientConfig;if(this.webIdentityCredentials=this.webIdentityCredentials||new AWS.WebIdentityCredentials(this.params,t),!this.cognito){var e=AWS.util.merge({},t);e.params=this.params,this.cognito=new CognitoIdentity(e)}this.sts=this.sts||new STS(t)},cacheId:function(t){this._identityId=t.IdentityId,this.params.IdentityId=this._identityId,AWS.util.isBrowser()&&(this.setStorage("id",t.IdentityId),this.params.Logins&&this.setStorage("providers",Object.keys(this.params.Logins).join(",")))},getStorage:function(t){return this.storage[this.localStorageKey[t]+this.params.IdentityPoolId+(this.params.LoginId||"")]},setStorage:function(t,e){try{this.storage[this.localStorageKey[t]+this.params.IdentityPoolId+(this.params.LoginId||"")]=e}catch(t){}},storage:function(){try{var t=AWS.util.isBrowser()&&null!==window.localStorage&&"object"===_typeof(window.localStorage)?window.localStorage:{};return t["aws.test-storage"]="foobar",delete t["aws.test-storage"],t}catch(t){return{}}}()});

},{"../../clients/cognitoidentity":25,"../../clients/sts":27,"../core":31}],35:[function(require,module,exports){
"use strict";var AWS=require("../core");AWS.CredentialProviderChain=AWS.util.inherit(AWS.Credentials,{constructor:function(e){this.providers=e||AWS.CredentialProviderChain.defaultProviders.slice(0),this.resolveCallbacks=[]},resolve:function(e){var r=this;if(0===r.providers.length)return e(new Error("No providers")),r;if(1===r.resolveCallbacks.push(e)){var i=0,o=r.providers.slice(0);!function e(t,l){if(!t&&l||i===o.length)return AWS.util.arrayEach(r.resolveCallbacks,function(e){e(t,l)}),void(r.resolveCallbacks.length=0);var s=o[i++];(l="function"==typeof s?s.call():s).get?l.get(function(r){e(r,r?null:l)}):e(null,l)}()}return r}}),AWS.CredentialProviderChain.defaultProviders=[],AWS.CredentialProviderChain.addPromisesToClass=function(e){this.prototype.resolvePromise=AWS.util.promisifyMethod("resolve",e)},AWS.CredentialProviderChain.deletePromisesFromClass=function(){delete this.prototype.resolvePromise},AWS.util.addPromises(AWS.CredentialProviderChain);

},{"../core":31}],36:[function(require,module,exports){
"use strict";var AWS=require("../core");require("../metadata_service"),AWS.EC2MetadataCredentials=AWS.util.inherit(AWS.Credentials,{constructor:function(e){AWS.Credentials.call(this),e=e?AWS.util.copy(e):{},(e=AWS.util.merge({maxRetries:this.defaultMaxRetries},e)).httpOptions||(e.httpOptions={}),e.httpOptions=AWS.util.merge({timeout:this.defaultTimeout,connectTimeout:this.defaultConnectTimeout},e.httpOptions),this.metadataService=new AWS.MetadataService(e),this.logger=e.logger||AWS.config&&AWS.config.logger},defaultTimeout:1e3,defaultConnectTimeout:1e3,defaultMaxRetries:3,originalExpiration:void 0,refresh:function(e){this.coalesceRefresh(e||AWS.util.fn.callback)},load:function(e){var t=this;t.metadataService.loadCredentials(function(i,a){i?t.hasLoadedCredentials()?(t.extendExpirationIfExpired(),e()):e(i):(t.setCredentials(a),t.extendExpirationIfExpired(),e())})},hasLoadedCredentials:function(){return this.AccessKeyId&&this.secretAccessKey},extendExpirationIfExpired:function(){if(this.needsRefresh()){this.originalExpiration=this.originalExpiration||this.expireTime,this.expired=!1;var e=900+Math.floor(5*Math.random()*60),t=AWS.util.date.getDate().getTime();this.expireTime=new Date(t+1e3*e),this.logger.warn("Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted again at "+this.expireTime+"\nFor more information, please visit: https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html")}},setCredentials:function(e){var t=AWS.util.date.getDate().getTime(),i=new Date(e.Expiration);this.expired=t>=i,this.metadata=e,this.accessKeyId=e.AccessKeyId,this.secretAccessKey=e.SecretAccessKey,this.sessionToken=e.Token,this.expireTime=i}});

},{"../core":31,"../metadata_service":70}],37:[function(require,module,exports){
"use strict";var AWS=require("../core");AWS.ECSCredentials=AWS.RemoteCredentials;

},{"../core":31}],38:[function(require,module,exports){
"use strict";var AWS=require("../core");AWS.EnvironmentCredentials=AWS.util.inherit(AWS.Credentials,{constructor:function(e){AWS.Credentials.call(this),this.envPrefix=e,this.get(function(){})},refresh:function(e){if(e||(e=AWS.util.fn.callback),process&&process.env){for(var r=["ACCESS_KEY_ID","SECRET_ACCESS_KEY","SESSION_TOKEN"],i=[],n=0;n<r.length;n++){var t="";if(this.envPrefix&&(t=this.envPrefix+"_"),i[n]=process.env[t+r[n]],!i[n]&&"SESSION_TOKEN"!==r[n])return void e(AWS.util.error(new Error("Variable "+t+r[n]+" not set."),{code:"EnvironmentCredentialsProviderFailure"}))}this.expired=!1,AWS.Credentials.apply(this,i),e()}else e(AWS.util.error(new Error("No process info or environment variables available"),{code:"EnvironmentCredentialsProviderFailure"}))}});

},{"../core":31}],39:[function(require,module,exports){
"use strict";var AWS=require("../core");AWS.FileSystemCredentials=AWS.util.inherit(AWS.Credentials,{constructor:function(e){AWS.Credentials.call(this),this.filename=e,this.get(function(){})},refresh:function(e){e||(e=AWS.util.fn.callback);try{var i=JSON.parse(AWS.util.readFileSync(this.filename));if(AWS.Credentials.call(this,i),!this.accessKeyId||!this.secretAccessKey)throw AWS.util.error(new Error("Credentials not set in "+this.filename),{code:"FileSystemCredentialsProviderFailure"});this.expired=!1,e()}catch(i){e(i)}}});

},{"../core":31}],40:[function(require,module,exports){
"use strict";var AWS=require("../core"),proc=require("child_process"),iniLoader=AWS.util.iniLoader;AWS.ProcessCredentials=AWS.util.inherit(AWS.Credentials,{constructor:function(e){AWS.Credentials.call(this),e=e||{},this.filename=e.filename,this.profile=e.profile||process.env.AWS_PROFILE||AWS.util.defaultProfile,this.get(e.callback||AWS.util.fn.noop)},load:function(e){var r=this;try{var i=AWS.util.getProfilesFromSharedConfig(iniLoader,this.filename)[this.profile]||{};if(0===Object.keys(i).length)throw AWS.util.error(new Error("Profile "+this.profile+" not found"),{code:"ProcessCredentialsProviderFailure"});if(!i.credential_process)throw AWS.util.error(new Error("Profile "+this.profile+" did not include credential process"),{code:"ProcessCredentialsProviderFailure"});this.loadViaCredentialProcess(i,function(i,o){i?e(i,null):(r.expired=!1,r.accessKeyId=o.AccessKeyId,r.secretAccessKey=o.SecretAccessKey,r.sessionToken=o.SessionToken,o.Expiration&&(r.expireTime=new Date(o.Expiration)),e(null))})}catch(r){e(r)}},loadViaCredentialProcess:function(e,r){proc.exec(e.credential_process,{env:process.env},function(e,i,o){if(e)r(AWS.util.error(new Error("credential_process returned error"),{code:"ProcessCredentialsProviderFailure"}),null);else try{var s=JSON.parse(i);if(s.Expiration){var t=AWS.util.date.getDate();if(new Date(s.Expiration)<t)throw Error("credential_process returned expired credentials")}if(1!==s.Version)throw Error("credential_process does not return Version == 1");r(null,s)}catch(e){r(AWS.util.error(new Error(e.message),{code:"ProcessCredentialsProviderFailure"}),null)}})},refresh:function(e){iniLoader.clearCachedFiles(),this.coalesceRefresh(e||AWS.util.fn.callback)}});

},{"../core":31,"child_process":undefined}],41:[function(require,module,exports){
"use strict";var AWS=require("../core"),ENV_RELATIVE_URI="AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",ENV_FULL_URI="AWS_CONTAINER_CREDENTIALS_FULL_URI",ENV_AUTH_TOKEN="AWS_CONTAINER_AUTHORIZATION_TOKEN",FULL_URI_UNRESTRICTED_PROTOCOLS=["https:"],FULL_URI_ALLOWED_PROTOCOLS=["http:","https:"],FULL_URI_ALLOWED_HOSTNAMES=["localhost","127.0.0.1"],RELATIVE_URI_HOST="169.254.170.2";AWS.RemoteCredentials=AWS.util.inherit(AWS.Credentials,{constructor:function(e){AWS.Credentials.call(this),(e=e?AWS.util.copy(e):{}).httpOptions||(e.httpOptions={}),e.httpOptions=AWS.util.merge(this.httpOptions,e.httpOptions),AWS.util.update(this,e)},httpOptions:{timeout:1e3},maxRetries:3,isConfiguredForEcsCredentials:function(){return Boolean(process&&process.env&&(process.env[ENV_RELATIVE_URI]||process.env[ENV_FULL_URI]))},getECSFullUri:function(){if(process&&process.env){var e=process.env[ENV_RELATIVE_URI],r=process.env[ENV_FULL_URI];if(e)return"http://"+RELATIVE_URI_HOST+e;if(r){var t=AWS.util.urlParse(r);if(FULL_URI_ALLOWED_PROTOCOLS.indexOf(t.protocol)<0)throw AWS.util.error(new Error("Unsupported protocol:  AWS.RemoteCredentials supports "+FULL_URI_ALLOWED_PROTOCOLS.join(",")+" only; "+t.protocol+" requested."),{code:"ECSCredentialsProviderFailure"});if(FULL_URI_UNRESTRICTED_PROTOCOLS.indexOf(t.protocol)<0&&FULL_URI_ALLOWED_HOSTNAMES.indexOf(t.hostname)<0)throw AWS.util.error(new Error("Unsupported hostname: AWS.RemoteCredentials only supports "+FULL_URI_ALLOWED_HOSTNAMES.join(",")+" for "+t.protocol+"; "+t.protocol+"//"+t.hostname+" requested."),{code:"ECSCredentialsProviderFailure"});return r}throw AWS.util.error(new Error("Variable "+ENV_RELATIVE_URI+" or "+ENV_FULL_URI+" must be set to use AWS.RemoteCredentials."),{code:"ECSCredentialsProviderFailure"})}throw AWS.util.error(new Error("No process info available"),{code:"ECSCredentialsProviderFailure"})},getECSAuthToken:function(){if(process&&process.env&&process.env[ENV_FULL_URI])return process.env[ENV_AUTH_TOKEN]},credsFormatIsValid:function(e){return!!(e.accessKeyId&&e.secretAccessKey&&e.sessionToken&&e.expireTime)},formatCreds:function(e){return e.credentials&&(e=e.credentials),{expired:!1,accessKeyId:e.accessKeyId||e.AccessKeyId,secretAccessKey:e.secretAccessKey||e.SecretAccessKey,sessionToken:e.sessionToken||e.Token,expireTime:new Date(e.expiration||e.Expiration)}},request:function(e,r){var t=new AWS.HttpRequest(e);t.method="GET",t.headers.Accept="application/json";var o=this.getECSAuthToken();o&&(t.headers.Authorization=o),AWS.util.handleRequestWithRetries(t,this,r)},refresh:function(e){this.coalesceRefresh(e||AWS.util.fn.callback)},load:function(e){var r,t=this;try{r=this.getECSFullUri()}catch(r){return void e(r)}this.request(r,function(r,o){if(!r)try{o=JSON.parse(o);var s=t.formatCreds(o);if(!t.credsFormatIsValid(s))throw AWS.util.error(new Error("Response data is not in valid format"),{code:"ECSCredentialsProviderFailure"});AWS.util.update(t,s)}catch(e){r=e}e(r,s)})}});

},{"../core":31}],42:[function(require,module,exports){
"use strict";var AWS=require("../core"),STS=require("../../clients/sts");AWS.SAMLCredentials=AWS.util.inherit(AWS.Credentials,{constructor:function(e){AWS.Credentials.call(this),this.expired=!0,this.params=e},refresh:function(e){this.coalesceRefresh(e||AWS.util.fn.callback)},load:function(e){var i=this;i.createClients(),i.service.assumeRoleWithSAML(function(s,t){s||i.service.credentialsFrom(t,i),e(s)})},createClients:function(){this.service=this.service||new STS({params:this.params})}});

},{"../../clients/sts":27,"../core":31}],43:[function(require,module,exports){
"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var AWS=require("../core"),STS=require("../../clients/sts"),iniLoader=AWS.util.iniLoader,ASSUME_ROLE_DEFAULT_REGION="us-east-1";AWS.SharedIniFileCredentials=AWS.util.inherit(AWS.Credentials,{constructor:function(e){AWS.Credentials.call(this),e=e||{},this.filename=e.filename,this.profile=e.profile||process.env.AWS_PROFILE||AWS.util.defaultProfile,this.disableAssumeRole=Boolean(e.disableAssumeRole),this.preferStaticCredentials=Boolean(e.preferStaticCredentials),this.tokenCodeFn=e.tokenCodeFn||null,this.httpOptions=e.httpOptions||null,this.get(e.callback||AWS.util.fn.noop)},load:function(e){var r=this;try{var i=AWS.util.getProfilesFromSharedConfig(iniLoader,this.filename),o=i[this.profile]||{};if(0===Object.keys(o).length)throw AWS.util.error(new Error("Profile "+this.profile+" not found"),{code:"SharedIniFileCredentialsProviderFailure"});var t=Boolean(this.preferStaticCredentials&&o.aws_access_key_id&&o.aws_secret_access_key);if(o.role_arn&&!t)return void this.loadRoleProfile(i,o,function(i,o){i?e(i):(r.expired=!1,r.accessKeyId=o.Credentials.AccessKeyId,r.secretAccessKey=o.Credentials.SecretAccessKey,r.sessionToken=o.Credentials.SessionToken,r.expireTime=o.Credentials.Expiration,e(null))});if(this.accessKeyId=o.aws_access_key_id,this.secretAccessKey=o.aws_secret_access_key,this.sessionToken=o.aws_session_token,!this.accessKeyId||!this.secretAccessKey)throw AWS.util.error(new Error("Credentials not set for profile "+this.profile),{code:"SharedIniFileCredentialsProviderFailure"});this.expired=!1,e(null)}catch(r){e(r)}},refresh:function(e){iniLoader.clearCachedFiles(),this.coalesceRefresh(e||AWS.util.fn.callback,this.disableAssumeRole)},loadRoleProfile:function(e,r,i){if(this.disableAssumeRole)throw AWS.util.error(new Error("Role assumption profiles are disabled. Failed to load profile "+this.profile+" from "+e.filename),{code:"SharedIniFileCredentialsProviderFailure"});var o=r.role_arn,t=r.role_session_name,s=r.external_id,n=r.mfa_serial,l=r.source_profile,a=parseInt(r.duration_seconds,10)||void 0,d=r.region||ASSUME_ROLE_DEFAULT_REGION;if(!l)throw AWS.util.error(new Error("source_profile is not set using profile "+this.profile),{code:"SharedIniFileCredentialsProviderFailure"});if("object"!==_typeof(e[l]))throw AWS.util.error(new Error("source_profile "+l+" using profile "+this.profile+" does not exist"),{code:"SharedIniFileCredentialsProviderFailure"});var c=new AWS.SharedIniFileCredentials(AWS.util.merge(this.options||{},{profile:l,preferStaticCredentials:!0}));this.roleArn=o;var f=new STS({credentials:c,region:d,httpOptions:this.httpOptions}),u={DurationSeconds:a,RoleArn:o,RoleSessionName:t||"aws-sdk-js-"+Date.now()};if(s&&(u.ExternalId=s),n&&this.tokenCodeFn)return u.SerialNumber=n,void this.tokenCodeFn(n,function(e,r){var o;if(e)return o=e instanceof Error?e.message:e,void i(AWS.util.error(new Error("Error fetching MFA token: "+o),{code:"SharedIniFileCredentialsProviderFailure"}));u.TokenCode=r,f.assumeRole(u,i)});f.assumeRole(u,i)}});

},{"../../clients/sts":27,"../core":31}],44:[function(require,module,exports){
"use strict";var AWS=require("../core"),path=require("path"),crypto=require("crypto"),iniLoader=AWS.util.iniLoader;AWS.SsoCredentials=AWS.util.inherit(AWS.Credentials,{constructor:function(e){AWS.Credentials.call(this),e=e||{},this.errorCode="SsoCredentialsProviderFailure",this.expired=!0,this.filename=e.filename,this.profile=e.profile||process.env.AWS_PROFILE||AWS.util.defaultProfile,this.service=e.ssoClient,this.httpOptions=e.httpOptions||null,this.get(e.callback||AWS.util.fn.noop)},load:function(e){var r=this;try{var s=AWS.util.getProfilesFromSharedConfig(iniLoader,this.filename)[this.profile]||{};if(0===Object.keys(s).length)throw AWS.util.error(new Error("Profile "+this.profile+" not found"),{code:r.errorCode});if(s.sso_session){if(!s.sso_account_id||!s.sso_role_name)throw AWS.util.error(new Error("Profile "+this.profile+" with session "+s.sso_session+' does not have valid SSO credentials. Required parameters "sso_account_id", "sso_session", "sso_role_name". Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html'),{code:r.errorCode})}else if(!(s.sso_start_url&&s.sso_account_id&&s.sso_region&&s.sso_role_name))throw AWS.util.error(new Error("Profile "+this.profile+' does not have valid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html'),{code:r.errorCode});this.getToken(this.profile,s,function(o,i){if(o)return e(o);var t={accessToken:i,accountId:s.sso_account_id,roleName:s.sso_role_name};r.service&&r.service.config.region===s.sso_region||(r.service=new AWS.SSO({region:s.sso_region,httpOptions:r.httpOptions})),r.service.getRoleCredentials(t,function(s,o){if(!s&&o&&o.roleCredentials){if(!(o.roleCredentials.accessKeyId&&o.roleCredentials.secretAccessKey&&o.roleCredentials.sessionToken&&o.roleCredentials.expiration))throw AWS.util.error(new Error("SSO returns an invalid temporary credential."));r.expired=!1,r.accessKeyId=o.roleCredentials.accessKeyId,r.secretAccessKey=o.roleCredentials.secretAccessKey,r.sessionToken=o.roleCredentials.sessionToken,r.expireTime=new Date(o.roleCredentials.expiration),e(null)}else e(AWS.util.error(s||new Error('Please log in using "aws sso login"'),{code:r.errorCode}),null)})})}catch(r){e(r)}},getToken:function(e,r,s){if(r.sso_session){var o=AWS.util.iniLoader.loadSsoSessionsFrom()[r.sso_session];Object.assign(r,o);var i=new AWS.SSOTokenProvider({profile:e});i.load(function(e){return e?s(e):s(null,i.token)})}else try{var t=crypto.createHash("sha1").update(r.sso_start_url).digest("hex")+".json",n=path.join(iniLoader.getHomeDir(),".aws","sso","cache",t),l=AWS.util.readFileSync(n),a=null;if(l&&(a=JSON.parse(l)),!a)throw AWS.util.error(new Error("Cached credentials not found under "+this.profile+" profile. Please make sure you log in with aws sso login first"),{code:this.errorCode});if(!(a.startUrl&&a.region&&a.accessToken&&a.expiresAt))throw AWS.util.error(new Error("Cached credentials are missing required properties. Try running aws sso login."));if(new Date(a.expiresAt).getTime()-Date.now()<=9e5)throw AWS.util.error(new Error("The SSO session associated with this profile has expired. To refresh this SSO session run aws sso login with the corresponding profile."));return s(null,a.accessToken)}catch(e){return s(e,null)}},refresh:function(e){iniLoader.clearCachedFiles(),this.coalesceRefresh(e||AWS.util.fn.callback)}});

},{"../core":31,"crypto":undefined,"path":undefined}],45:[function(require,module,exports){
"use strict";var AWS=require("../core"),STS=require("../../clients/sts");AWS.TemporaryCredentials=AWS.util.inherit(AWS.Credentials,{constructor:function(e,s){AWS.Credentials.call(this),this.loadMasterCredentials(s),this.expired=!0,this.params=e||{},this.params.RoleArn&&(this.params.RoleSessionName=this.params.RoleSessionName||"temporary-credentials")},refresh:function(e){this.coalesceRefresh(e||AWS.util.fn.callback)},load:function(e){var s=this;s.createClients(),s.masterCredentials.get(function(){s.service.config.credentials=s.masterCredentials,(s.params.RoleArn?s.service.assumeRole:s.service.getSessionToken).call(s.service,function(t,r){t||s.service.credentialsFrom(r,s),e(t)})})},loadMasterCredentials:function(e){for(this.masterCredentials=e||AWS.config.credentials;this.masterCredentials.masterCredentials;)this.masterCredentials=this.masterCredentials.masterCredentials;"function"!=typeof this.masterCredentials.get&&(this.masterCredentials=new AWS.Credentials(this.masterCredentials))},createClients:function(){this.service=this.service||new STS({params:this.params})}});

},{"../../clients/sts":27,"../core":31}],46:[function(require,module,exports){
"use strict";var AWS=require("../core"),fs=require("fs"),STS=require("../../clients/sts"),iniLoader=AWS.util.iniLoader;AWS.TokenFileWebIdentityCredentials=AWS.util.inherit(AWS.Credentials,{constructor:function(e){AWS.Credentials.call(this),this.data=null,this.clientConfig=AWS.util.copy(e||{})},getParamsFromEnv:function(){if(process.env.AWS_WEB_IDENTITY_TOKEN_FILE&&process.env.AWS_ROLE_ARN)return[{envTokenFile:process.env.AWS_WEB_IDENTITY_TOKEN_FILE,roleArn:process.env.AWS_ROLE_ARN,roleSessionName:process.env.AWS_ROLE_SESSION_NAME}]},getParamsFromSharedConfig:function(){var e=AWS.util.getProfilesFromSharedConfig(iniLoader),i=process.env.AWS_PROFILE||AWS.util.defaultProfile,r=e[i]||{};if(0===Object.keys(r).length)throw AWS.util.error(new Error("Profile "+i+" not found"),{code:"TokenFileWebIdentityCredentialsProviderFailure"});for(var n=[];!r.web_identity_token_file&&r.source_profile;){n.unshift({roleArn:r.role_arn,roleSessionName:r.role_session_name}),r=e[r.source_profile]}return n.unshift({envTokenFile:r.web_identity_token_file,roleArn:r.role_arn,roleSessionName:r.role_session_name}),n},refresh:function(e){this.coalesceRefresh(e||AWS.util.fn.callback)},assumeRoleChaining:function(e,i){var r=this;if(0===e.length)r.service.credentialsFrom(r.data,r),i();else{var n=e.shift();r.service.config.credentials=r.service.credentialsFrom(r.data,r),r.service.assumeRole({RoleArn:n.roleArn,RoleSessionName:n.roleSessionName||"token-file-web-identity"},function(n,o){r.data=null,n?i(n):(r.data=o,r.assumeRoleChaining(e,i))})}},load:function(e){var i=this;try{var r=i.getParamsFromEnv();if(r||(r=i.getParamsFromSharedConfig()),r){var n=r.shift(),o=fs.readFileSync(n.envTokenFile,{encoding:"ascii"});i.service||i.createClients(),i.service.assumeRoleWithWebIdentity({WebIdentityToken:o,RoleArn:n.roleArn,RoleSessionName:n.roleSessionName||"token-file-web-identity"},function(n,o){i.data=null,n?e(n):(i.data=o,i.assumeRoleChaining(r,e))})}}catch(i){e(i)}},createClients:function(){if(!this.service){var e=AWS.util.merge({},this.clientConfig);this.service=new STS(e),this.service.retryableError=function(e){return"IDPCommunicationErrorException"===e.code||"InvalidIdentityToken"===e.code||AWS.Service.prototype.retryableError.call(this,e)}}}});

},{"../../clients/sts":27,"../core":31,"fs":undefined}],47:[function(require,module,exports){
"use strict";var AWS=require("../core"),STS=require("../../clients/sts");AWS.WebIdentityCredentials=AWS.util.inherit(AWS.Credentials,{constructor:function(e,i){AWS.Credentials.call(this),this.expired=!0,this.params=e,this.params.RoleSessionName=this.params.RoleSessionName||"web-identity",this.data=null,this._clientConfig=AWS.util.copy(i||{})},refresh:function(e){this.coalesceRefresh(e||AWS.util.fn.callback)},load:function(e){var i=this;i.createClients(),i.service.assumeRoleWithWebIdentity(function(t,s){i.data=null,t||(i.data=s,i.service.credentialsFrom(s,i)),e(t)})},createClients:function(){if(!this.service){var e=AWS.util.merge({},this._clientConfig);e.params=this.params,this.service=new STS(e)}}});

},{"../../clients/sts":27,"../core":31}],48:[function(require,module,exports){
"use strict";var AWS=require("./core"),util=require("./util"),endpointDiscoveryEnabledEnvs=["AWS_ENABLE_ENDPOINT_DISCOVERY","AWS_ENDPOINT_DISCOVERY_ENABLED"];function getCacheKey(e){var i=e.service,n=i.api||{},r=(n.operations,{});return i.config.region&&(r.region=i.config.region),n.serviceId&&(r.serviceId=n.serviceId),i.config.credentials.accessKeyId&&(r.accessKeyId=i.config.credentials.accessKeyId),r}function marshallCustomIdentifiersHelper(e,i,n){n&&null!=i&&"structure"===n.type&&n.required&&n.required.length>0&&util.arrayEach(n.required,function(r){var t=n.members[r];if(!0===t.endpointDiscoveryId){var o=t.isLocationName?t.name:r;e[o]=String(i[r])}else marshallCustomIdentifiersHelper(e,i[r],t)})}function marshallCustomIdentifiers(e,i){var n={};return marshallCustomIdentifiersHelper(n,e.params,i),n}function optionalDiscoverEndpoint(e){var i=e.service,n=i.api,r=n.operations?n.operations[e.operation]:void 0,t=marshallCustomIdentifiers(e,r?r.input:void 0),o=getCacheKey(e);Object.keys(t).length>0&&(o=util.update(o,t),r&&(o.operation=r.name));var s=AWS.endpointCache.get(o);if(!s||1!==s.length||""!==s[0].Address)if(s&&s.length>0)e.httpRequest.updateEndpoint(s[0].Address);else{var a=i.makeRequest(n.endpointOperation,{Operation:r.name,Identifiers:t});addApiVersionHeader(a),a.removeListener("validate",AWS.EventListeners.Core.VALIDATE_PARAMETERS),a.removeListener("retry",AWS.EventListeners.Core.RETRY_CHECK),AWS.endpointCache.put(o,[{Address:"",CachePeriodInMinutes:1}]),a.send(function(e,i){i&&i.Endpoints?AWS.endpointCache.put(o,i.Endpoints):e&&AWS.endpointCache.put(o,[{Address:"",CachePeriodInMinutes:1}])})}}var requestQueue={};function requiredDiscoverEndpoint(e,i){var n=e.service,r=n.api,t=r.operations?r.operations[e.operation]:void 0,o=t?t.input:void 0,s=marshallCustomIdentifiers(e,o),a=getCacheKey(e);Object.keys(s).length>0&&(a=util.update(a,s),t&&(a.operation=t.name));var d=AWS.EndpointCache.getKeyString(a),p=AWS.endpointCache.get(d);if(p&&1===p.length&&""===p[0].Address)return requestQueue[d]||(requestQueue[d]=[]),void requestQueue[d].push({request:e,callback:i});if(p&&p.length>0)e.httpRequest.updateEndpoint(p[0].Address),i();else{var u=n.makeRequest(r.endpointOperation,{Operation:t.name,Identifiers:s});u.removeListener("validate",AWS.EventListeners.Core.VALIDATE_PARAMETERS),addApiVersionHeader(u),AWS.endpointCache.put(d,[{Address:"",CachePeriodInMinutes:60}]),u.send(function(n,r){if(n){if(e.response.error=util.error(n,{retryable:!1}),AWS.endpointCache.remove(a),requestQueue[d]){var t=requestQueue[d];util.arrayEach(t,function(e){e.request.response.error=util.error(n,{retryable:!1}),e.callback()}),delete requestQueue[d]}}else if(r&&(AWS.endpointCache.put(d,r.Endpoints),e.httpRequest.updateEndpoint(r.Endpoints[0].Address),requestQueue[d])){t=requestQueue[d];util.arrayEach(t,function(e){e.request.httpRequest.updateEndpoint(r.Endpoints[0].Address),e.callback()}),delete requestQueue[d]}i()})}}function addApiVersionHeader(e){var i=e.service.api.apiVersion;i&&!e.httpRequest.headers["x-amz-api-version"]&&(e.httpRequest.headers["x-amz-api-version"]=i)}function invalidateCachedEndpoints(e){var i=e.error,n=e.httpResponse;if(i&&("InvalidEndpointException"===i.code||421===n.statusCode)){var r=e.request,t=r.service.api.operations||{},o=marshallCustomIdentifiers(r,t[r.operation]?t[r.operation].input:void 0),s=getCacheKey(r);Object.keys(o).length>0&&(s=util.update(s,o),t[r.operation]&&(s.operation=t[r.operation].name)),AWS.endpointCache.remove(s)}}function hasCustomEndpoint(e){if(e._originalConfig&&e._originalConfig.endpoint&&!0===e._originalConfig.endpointDiscoveryEnabled)throw util.error(new Error,{code:"ConfigurationException",message:"Custom endpoint is supplied; endpointDiscoveryEnabled must not be true."});var i=AWS.config[e.serviceIdentifier]||{};return Boolean(AWS.config.endpoint||i.endpoint||e._originalConfig&&e._originalConfig.endpoint)}function isFalsy(e){return["false","0"].indexOf(e)>=0}function resolveEndpointDiscoveryConfig(e){var i=e.service||{};if(void 0!==i.config.endpointDiscoveryEnabled)return i.config.endpointDiscoveryEnabled;if(!util.isBrowser()){for(var n=0;n<endpointDiscoveryEnabledEnvs.length;n++){var r=endpointDiscoveryEnabledEnvs[n];if(Object.prototype.hasOwnProperty.call(process.env,r)){if(""===process.env[r]||void 0===process.env[r])throw util.error(new Error,{code:"ConfigurationException",message:"environmental variable "+r+" cannot be set to nothing"});return!isFalsy(process.env[r])}}var t={};try{t=AWS.util.iniLoader?AWS.util.iniLoader.loadFrom({isConfig:!0,filename:process.env[AWS.util.sharedConfigFileEnv]}):{}}catch(e){}var o=t[process.env.AWS_PROFILE||AWS.util.defaultProfile]||{};if(Object.prototype.hasOwnProperty.call(o,"endpoint_discovery_enabled")){if(void 0===o.endpoint_discovery_enabled)throw util.error(new Error,{code:"ConfigurationException",message:"config file entry 'endpoint_discovery_enabled' cannot be set to nothing"});return!isFalsy(o.endpoint_discovery_enabled)}}}function discoverEndpoint(e,i){var n=e.service||{};if(hasCustomEndpoint(n)||e.isPresigned())return i();var r=(n.api.operations||{})[e.operation],t=r?r.endpointDiscoveryRequired:"NULL",o=resolveEndpointDiscoveryConfig(e),s=n.api.hasRequiredEndpointDiscovery;switch((o||s)&&e.httpRequest.appendToUserAgent("endpoint-discovery"),t){case"OPTIONAL":(o||s)&&(optionalDiscoverEndpoint(e),e.addNamedListener("INVALIDATE_CACHED_ENDPOINTS","extractError",invalidateCachedEndpoints)),i();break;case"REQUIRED":if(!1===o){e.response.error=util.error(new Error,{code:"ConfigurationException",message:"Endpoint Discovery is disabled but "+n.api.className+"."+e.operation+"() requires it. Please check your configurations."}),i();break}e.addNamedListener("INVALIDATE_CACHED_ENDPOINTS","extractError",invalidateCachedEndpoints),requiredDiscoverEndpoint(e,i);break;case"NULL":default:i()}}module.exports={discoverEndpoint:discoverEndpoint,requiredDiscoverEndpoint:requiredDiscoverEndpoint,optionalDiscoverEndpoint:optionalDiscoverEndpoint,marshallCustomIdentifiers:marshallCustomIdentifiers,getCacheKey:getCacheKey,invalidateCachedEndpoint:invalidateCachedEndpoints};

},{"./core":31,"./util":119}],49:[function(require,module,exports){
"use strict";var AWS=require("../core"),util=AWS.util,typeOf=require("./types").typeOf,DynamoDBSet=require("./set"),NumberValue=require("./numberValue");function formatList(r,e){for(var t={L:[]},n=0;n<r.length;n++)t.L.push(AWS.DynamoDB.Converter.input(r[n],e));return t}function convertNumber(r,e){return e?new NumberValue(r):Number(r)}function formatMap(r,e){var t={M:{}};for(var n in r){var u=AWS.DynamoDB.Converter.input(r[n],e);void 0!==u&&(t.M[n]=u)}return t}function formatSet(r,e){e=e||{};var t=r.values;if(e.convertEmptyValues&&0===(t=filterEmptySetValues(r)).length)return AWS.DynamoDB.Converter.input(null);var n={};switch(r.type){case"String":n.SS=t;break;case"Binary":n.BS=t;break;case"Number":n.NS=t.map(function(r){return r.toString()})}return n}function filterEmptySetValues(r){var e=[];if({String:!0,Binary:!0,Number:!1}[r.type]){for(var t=0;t<r.values.length;t++)0!==r.values[t].length&&e.push(r.values[t]);return e}return r.values}AWS.DynamoDB.Converter={input:function r(e,t){t=t||{};var n=typeOf(e);return"Object"===n?formatMap(e,t):"Array"===n?formatList(e,t):"Set"===n?formatSet(e,t):"String"===n?0===e.length&&t.convertEmptyValues?r(null):{S:e}:"Number"===n||"NumberValue"===n?{N:e.toString()}:"Binary"===n?0===e.length&&t.convertEmptyValues?r(null):{B:e}:"Boolean"===n?{BOOL:e}:"null"===n?{NULL:!0}:"undefined"!==n&&"Function"!==n?formatMap(e,t):void 0},marshall:function(r,e){return AWS.DynamoDB.Converter.input(r,e).M},output:function r(e,t){var n,u,a;for(var o in t=t||{},e){var i=e[o];if("M"===o){for(var f in u={},i)u[f]=r(i[f],t);return u}if("L"===o){for(n=[],a=0;a<i.length;a++)n.push(r(i[a],t));return n}if("SS"===o){for(n=[],a=0;a<i.length;a++)n.push(i[a]+"");return new DynamoDBSet(n)}if("NS"===o){for(n=[],a=0;a<i.length;a++)n.push(convertNumber(i[a],t.wrapNumbers));return new DynamoDBSet(n)}if("BS"===o){for(n=[],a=0;a<i.length;a++)n.push(AWS.util.buffer.toBuffer(i[a]));return new DynamoDBSet(n)}if("S"===o)return i+"";if("N"===o)return convertNumber(i,t.wrapNumbers);if("B"===o)return util.buffer.toBuffer(i);if("BOOL"===o)return"true"===i||"TRUE"===i||!0===i;if("NULL"===o)return null}},unmarshall:function(r,e){return AWS.DynamoDB.Converter.output({M:r},e)}},module.exports=AWS.DynamoDB.Converter;

},{"../core":31,"./numberValue":51,"./set":52,"./types":54}],50:[function(require,module,exports){
"use strict";var AWS=require("../core"),Translator=require("./translator"),DynamoDBSet=require("./set");AWS.DynamoDB.DocumentClient=AWS.util.inherit({constructor:function(e){this.options=e||{},this.configure(this.options)},configure:function(e){this.service=e.service,this.bindServiceObject(e),this.attrValue=e.attrValue=this.service.api.operations.putItem.input.members.Item.value.shape},bindServiceObject:function(e){if(e=e||{},this.service){var t=AWS.util.copy(this.service.config);this.service=new this.service.constructor.__super__(t),this.service.config.params=AWS.util.merge(this.service.config.params||{},e.params)}else this.service=new AWS.DynamoDB(e)},makeServiceRequest:function(e,t,r){var i=this.service[e](t);return this.setupRequest(i),this.setupResponse(i),"function"==typeof r&&i.send(r),i},serviceClientOperationsMap:{batchGet:"batchGetItem",batchWrite:"batchWriteItem",delete:"deleteItem",get:"getItem",put:"putItem",query:"query",scan:"scan",update:"updateItem",transactGet:"transactGetItems",transactWrite:"transactWriteItems"},batchGet:function(e,t){var r=this.serviceClientOperationsMap.batchGet;return this.makeServiceRequest(r,e,t)},batchWrite:function(e,t){var r=this.serviceClientOperationsMap.batchWrite;return this.makeServiceRequest(r,e,t)},delete:function(e,t){var r=this.serviceClientOperationsMap.delete;return this.makeServiceRequest(r,e,t)},get:function(e,t){var r=this.serviceClientOperationsMap.get;return this.makeServiceRequest(r,e,t)},put:function(e,t){var r=this.serviceClientOperationsMap.put;return this.makeServiceRequest(r,e,t)},update:function(e,t){var r=this.serviceClientOperationsMap.update;return this.makeServiceRequest(r,e,t)},scan:function(e,t){var r=this.serviceClientOperationsMap.scan;return this.makeServiceRequest(r,e,t)},query:function(e,t){var r=this.serviceClientOperationsMap.query;return this.makeServiceRequest(r,e,t)},transactWrite:function(e,t){var r=this.serviceClientOperationsMap.transactWrite;return this.makeServiceRequest(r,e,t)},transactGet:function(e,t){var r=this.serviceClientOperationsMap.transactGet;return this.makeServiceRequest(r,e,t)},createSet:function(e,t){return new DynamoDBSet(e,t=t||{})},getTranslator:function(){return new Translator(this.options)},setupRequest:function(e){var t=this.getTranslator(),r=e.operation,i=e.service.api.operations[r].input;e._events.validate.unshift(function(e){e.rawParams=AWS.util.copy(e.params),e.params=t.translateInput(e.rawParams,i)})},setupResponse:function(e){var t=this,r=t.getTranslator(),i=t.service.api.operations[e.operation].output;e.on("extractData",function(e){e.data=r.translateOutput(e.data,i)}),e.response.nextPage=function(e){var r,i=this.request,s=i.service,n=i.operation;try{r=s.paginationConfig(n,!0)}catch(e){this.error=e}if(!this.hasNextPage()){if(e)e(this.error,null);else if(this.error)throw this.error;return null}var a=AWS.util.copy(i.rawParams);if(this.nextPageTokens){var u=r.inputToken;"string"==typeof u&&(u=[u]);for(var c=0;c<u.length;c++)a[u[c]]=this.nextPageTokens[c];return t[n](a,e)}return e?e(null,null):null}}}),module.exports=AWS.DynamoDB.DocumentClient;

},{"../core":31,"./set":52,"./translator":53}],51:[function(require,module,exports){
"use strict";var util=require("../core").util,DynamoDBNumberValue=util.inherit({constructor:function(t){this.wrapperName="NumberValue",this.value=t.toString()},toJSON:function(){return this.toNumber()},toNumber:function(){return Number(this.value)},toString:function(){return this.value}});module.exports=DynamoDBNumberValue;

},{"../core":31}],52:[function(require,module,exports){
"use strict";var util=require("../core").util,typeOf=require("./types").typeOf,memberTypeToSetType={String:"String",Number:"Number",NumberValue:"Number",Binary:"Binary"},DynamoDBSet=util.inherit({constructor:function(e,t){t=t||{},this.wrapperName="Set",this.initialize(e,t.validate)},initialize:function(e,t){this.values=[].concat(e),this.detectType(),t&&this.validate()},detectType:function(){if(this.type=memberTypeToSetType[typeOf(this.values[0])],!this.type)throw util.error(new Error,{code:"InvalidSetType",message:"Sets can contain string, number, or binary values"})},validate:function(){for(var e=this.values.length,t=this.values,i=0;i<e;i++)if(memberTypeToSetType[typeOf(t[i])]!==this.type)throw util.error(new Error,{code:"InvalidType",message:this.type+" Set contains "+typeOf(t[i])+" value"})},toJSON:function(){return this.values}});module.exports=DynamoDBSet;

},{"../core":31,"./types":54}],53:[function(require,module,exports){
"use strict";var util=require("../core").util,convert=require("./converter"),Translator=function(t){t=t||{},this.attrValue=t.attrValue,this.convertEmptyValues=Boolean(t.convertEmptyValues),this.wrapNumbers=Boolean(t.wrapNumbers)};Translator.prototype.translateInput=function(t,r){return this.mode="input",this.translate(t,r)},Translator.prototype.translateOutput=function(t,r){return this.mode="output",this.translate(t,r)},Translator.prototype.translate=function(t,r){if(r&&void 0!==t){if(r.shape===this.attrValue)return convert[this.mode](t,{convertEmptyValues:this.convertEmptyValues,wrapNumbers:this.wrapNumbers});switch(r.type){case"structure":return this.translateStructure(t,r);case"map":return this.translateMap(t,r);case"list":return this.translateList(t,r);default:return this.translateScalar(t,r)}}},Translator.prototype.translateStructure=function(t,r){var a=this;if(null!=t){var e={};return util.each(t,function(t,n){var s=r.members[t];if(s){var u=a.translate(n,s);void 0!==u&&(e[t]=u)}}),e}},Translator.prototype.translateList=function(t,r){var a=this;if(null!=t){var e=[];return util.arrayEach(t,function(t){var n=a.translate(t,r.member);void 0===n?e.push(null):e.push(n)}),e}},Translator.prototype.translateMap=function(t,r){var a=this;if(null!=t){var e={};return util.each(t,function(t,n){var s=a.translate(n,r.value);e[t]=void 0===s?null:s}),e}},Translator.prototype.translateScalar=function(t,r){return r.toType(t)},module.exports=Translator;

},{"../core":31,"./converter":49}],54:[function(require,module,exports){
"use strict";function _typeof(r){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var util=require("../core").util;function typeOf(r){return null===r&&"object"===_typeof(r)?"null":void 0!==r&&isBinary(r)?"Binary":void 0!==r&&r.constructor?r.wrapperName||util.typeName(r.constructor):void 0!==r&&"object"===_typeof(r)?"Object":"undefined"}function isBinary(r){var t=["Buffer","File","Blob","ArrayBuffer","DataView","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"];if(util.isNode()){var e=util.stream.Stream;if(util.Buffer.isBuffer(r)||r instanceof e)return!0}for(var o=0;o<t.length;o++)if(void 0!==r&&r.constructor){if(util.isType(r,t[o]))return!0;if(util.typeName(r.constructor)===t[o])return!0}return!1}module.exports={typeOf:typeOf,isBinary:isBinary};

},{"../core":31}],55:[function(require,module,exports){
"use strict";var eventMessageChunker=require("../event-stream/event-message-chunker").eventMessageChunker,parseEvent=require("./parse-event").parseEvent;function createEventStream(e,r,t){for(var n=eventMessageChunker(e),a=[],s=0;s<n.length;s++)a.push(parseEvent(r,n[s],t));return a}module.exports={createEventStream:createEventStream};

},{"../event-stream/event-message-chunker":57,"./parse-event":60}],56:[function(require,module,exports){
"use strict";var util=require("../core").util,Transform=require("stream").Transform,allocBuffer=util.buffer.alloc;function EventMessageChunkerStream(e){Transform.call(this,e),this.currentMessageTotalLength=0,this.currentMessagePendingLength=0,this.currentMessage=null,this.messageLengthBuffer=null}EventMessageChunkerStream.prototype=Object.create(Transform.prototype),EventMessageChunkerStream.prototype._transform=function(e,t,s){for(var r=e.length,n=0;n<r;){if(!this.currentMessage){var a=r-n;this.messageLengthBuffer||(this.messageLengthBuffer=allocBuffer(4));var g=Math.min(4-this.currentMessagePendingLength,a);if(e.copy(this.messageLengthBuffer,this.currentMessagePendingLength,n,n+g),this.currentMessagePendingLength+=g,n+=g,this.currentMessagePendingLength<4)break;this.allocateMessage(this.messageLengthBuffer.readUInt32BE(0)),this.messageLengthBuffer=null}var h=Math.min(this.currentMessageTotalLength-this.currentMessagePendingLength,r-n);e.copy(this.currentMessage,this.currentMessagePendingLength,n,n+h),this.currentMessagePendingLength+=h,n+=h,this.currentMessageTotalLength&&this.currentMessageTotalLength===this.currentMessagePendingLength&&(this.push(this.currentMessage),this.currentMessage=null,this.currentMessageTotalLength=0,this.currentMessagePendingLength=0)}s()},EventMessageChunkerStream.prototype._flush=function(e){this.currentMessageTotalLength?this.currentMessageTotalLength===this.currentMessagePendingLength?e(null,this.currentMessage):e(new Error("Truncated event message received.")):e()},EventMessageChunkerStream.prototype.allocateMessage=function(e){if("number"!=typeof e)throw new Error("Attempted to allocate an event message where size was not a number: "+e);this.currentMessageTotalLength=e,this.currentMessagePendingLength=4,this.currentMessage=allocBuffer(e),this.currentMessage.writeUInt32BE(e,0)},module.exports={EventMessageChunkerStream:EventMessageChunkerStream};

},{"../core":31,"stream":undefined}],57:[function(require,module,exports){
"use strict";function eventMessageChunker(e){for(var n=[],r=0;r<e.length;){var s=e.readInt32BE(r),t=e.slice(r,s+r);r+=s,n.push(t)}return n}module.exports={eventMessageChunker:eventMessageChunker};

},{}],58:[function(require,module,exports){
"use strict";var Transform=require("stream").Transform,parseEvent=require("./parse-event").parseEvent;function EventUnmarshallerStream(e){(e=e||{}).readableObjectMode=!0,Transform.call(this,e),this._readableState.objectMode=!0,this.parser=e.parser,this.eventStreamModel=e.eventStreamModel}EventUnmarshallerStream.prototype=Object.create(Transform.prototype),EventUnmarshallerStream.prototype._transform=function(e,r,t){try{var a=parseEvent(this.parser,e,this.eventStreamModel);return this.push(a),t()}catch(e){t(e)}},module.exports={EventUnmarshallerStream:EventUnmarshallerStream};

},{"./parse-event":60,"stream":undefined}],59:[function(require,module,exports){
"use strict";var util=require("../core").util,toBuffer=util.buffer.toBuffer;function Int64(t){if(8!==t.length)throw new Error("Int64 buffers must be exactly 8 bytes");util.Buffer.isBuffer(t)||(t=toBuffer(t)),this.bytes=t}function negate(t){for(var r=0;r<8;r++)t[r]^=255;for(r=7;r>-1&&(t[r]++,0===t[r]);r--);}Int64.fromNumber=function(t){if(t>0x8000000000000000||t<-0x8000000000000000)throw new Error(t+" is too large (or, if negative, too small) to represent as an Int64");for(var r=new Uint8Array(8),e=7,n=Math.abs(Math.round(t));e>-1&&n>0;e--,n/=256)r[e]=n;return t<0&&negate(r),new Int64(r)},Int64.prototype.valueOf=function(){var t=this.bytes.slice(0),r=128&t[0];return r&&negate(t),parseInt(t.toString("hex"),16)*(r?-1:1)},Int64.prototype.toString=function(){return String(this.valueOf())},module.exports={Int64:Int64};

},{"../core":31}],60:[function(require,module,exports){
"use strict";var parseMessage=require("./parse-message").parseMessage;function parseEvent(e,r,a){var s=parseMessage(r),t=s.headers[":message-type"];if(t){if("error"===t.value)throw parseError(s);if("event"!==t.value)return}var v=s.headers[":event-type"],n=a.members[v.value];if(n){var o={},m=n.eventPayloadMemberName;if(m){var p=n.members[m];"binary"===p.type?o[m]=s.body:o[m]=e.parse(s.body.toString(),p)}for(var u=n.eventHeaderMemberNames,d=0;d<u.length;d++){var i=u[d];s.headers[i]&&(o[i]=n.members[i].toType(s.headers[i].value))}var l={};return l[v.value]=o,l}}function parseError(e){var r=e.headers[":error-code"],a=e.headers[":error-message"],s=new Error(a.value||a);return s.code=s.name=r.value||r,s}module.exports={parseEvent:parseEvent};

},{"./parse-message":61}],61:[function(require,module,exports){
"use strict";var Int64=require("./int64").Int64,splitMessage=require("./split-message").splitMessage,BOOLEAN_TAG="boolean",BYTE_TAG="byte",SHORT_TAG="short",INT_TAG="integer",LONG_TAG="long",BINARY_TAG="binary",STRING_TAG="string",TIMESTAMP_TAG="timestamp",UUID_TAG="uuid";function parseHeaders(e){for(var a={},r=0;r<e.length;){var s=e.readUInt8(r++),t=e.slice(r,r+s).toString();switch(r+=s,e.readUInt8(r++)){case 0:a[t]={type:BOOLEAN_TAG,value:!0};break;case 1:a[t]={type:BOOLEAN_TAG,value:!1};break;case 2:a[t]={type:BYTE_TAG,value:e.readInt8(r++)};break;case 3:a[t]={type:SHORT_TAG,value:e.readInt16BE(r)},r+=2;break;case 4:a[t]={type:INT_TAG,value:e.readInt32BE(r)},r+=4;break;case 5:a[t]={type:LONG_TAG,value:new Int64(e.slice(r,r+8))},r+=8;break;case 6:var n=e.readUInt16BE(r);r+=2,a[t]={type:BINARY_TAG,value:e.slice(r,r+n)},r+=n;break;case 7:var T=e.readUInt16BE(r);r+=2,a[t]={type:STRING_TAG,value:e.slice(r,r+T).toString()},r+=T;break;case 8:a[t]={type:TIMESTAMP_TAG,value:new Date(new Int64(e.slice(r,r+8)).valueOf())},r+=8;break;case 9:var u=e.slice(r,r+16).toString("hex");r+=16,a[t]={type:UUID_TAG,value:u.substr(0,8)+"-"+u.substr(8,4)+"-"+u.substr(12,4)+"-"+u.substr(16,4)+"-"+u.substr(20)};break;default:throw new Error("Unrecognized header type tag")}}return a}function parseMessage(e){var a=splitMessage(e);return{headers:parseHeaders(a.headers),body:a.body}}module.exports={parseMessage:parseMessage};

},{"./int64":59,"./split-message":62}],62:[function(require,module,exports){
"use strict";var util=require("../core").util,toBuffer=util.buffer.toBuffer,PRELUDE_MEMBER_LENGTH=4,PRELUDE_LENGTH=2*PRELUDE_MEMBER_LENGTH,CHECKSUM_LENGTH=4,MINIMUM_MESSAGE_LENGTH=PRELUDE_LENGTH+2*CHECKSUM_LENGTH;function splitMessage(e){if(util.Buffer.isBuffer(e)||(e=toBuffer(e)),e.length<MINIMUM_MESSAGE_LENGTH)throw new Error("Provided message too short to accommodate event stream message overhead");if(e.length!==e.readUInt32BE(0))throw new Error("Reported message length does not match received message length");var E=e.readUInt32BE(PRELUDE_LENGTH);if(E!==util.crypto.crc32(e.slice(0,PRELUDE_LENGTH)))throw new Error("The prelude checksum specified in the message ("+E+") does not match the calculated CRC32 checksum.");var t=e.readUInt32BE(e.length-CHECKSUM_LENGTH);if(t!==util.crypto.crc32(e.slice(0,e.length-CHECKSUM_LENGTH)))throw new Error("The message checksum did not match the expected value of "+t);var r=PRELUDE_LENGTH+CHECKSUM_LENGTH,s=r+e.readUInt32BE(PRELUDE_MEMBER_LENGTH);return{headers:e.slice(r,s),body:e.slice(s,e.length-CHECKSUM_LENGTH)}}module.exports={splitMessage:splitMessage};

},{"../core":31}],63:[function(require,module,exports){
"use strict";var EventMessageChunkerStream=require("../event-stream/event-message-chunker-stream").EventMessageChunkerStream,EventUnmarshallerStream=require("../event-stream/event-message-unmarshaller-stream").EventUnmarshallerStream;function createEventStream(e,r,t){var a=new EventUnmarshallerStream({parser:r,eventStreamModel:t}),n=new EventMessageChunkerStream;return e.pipe(n).pipe(a),e.on("error",function(e){n.emit("error",e)}),n.on("error",function(e){a.emit("error",e)}),a}module.exports={createEventStream:createEventStream};

},{"../event-stream/event-message-chunker-stream":56,"../event-stream/event-message-unmarshaller-stream":58}],64:[function(require,module,exports){
"use strict";var AWS=require("./core"),SequentialExecutor=require("./sequential_executor"),DISCOVER_ENDPOINT=require("./discover_endpoint").discoverEndpoint;function getOperationAuthtype(e){if(!e.service.api.operations)return"";var t=e.service.api.operations[e.operation];return t?t.authtype:""}function getIdentityType(e){var t=e.service;return t.config.signatureVersion?t.config.signatureVersion:t.api.signatureVersion?t.api.signatureVersion:getOperationAuthtype(e)}AWS.EventListeners={Core:{}},AWS.EventListeners={Core:(new SequentialExecutor).addNamedListeners(function(e,t){t("VALIDATE_CREDENTIALS","validate",function(e,t){if(!e.service.api.signatureVersion&&!e.service.config.signatureVersion)return t();"bearer"!==getIdentityType(e)?e.service.config.getCredentials(function(r){r&&(e.response.error=AWS.util.error(r,{code:"CredentialsError",message:"Missing credentials in config, if using AWS_CONFIG_FILE, set AWS_SDK_LOAD_CONFIG=1"})),t()}):e.service.config.getToken(function(r){r&&(e.response.error=AWS.util.error(r,{code:"TokenError"})),t()})}),e("VALIDATE_REGION","validate",function(e){if(!e.service.isGlobalEndpoint){var t=new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);e.service.config.region?t.test(e.service.config.region)||(e.response.error=AWS.util.error(new Error,{code:"ConfigError",message:"Invalid region in config"})):e.response.error=AWS.util.error(new Error,{code:"ConfigError",message:"Missing region in config"})}}),e("BUILD_IDEMPOTENCY_TOKENS","validate",function(e){if(e.service.api.operations){var t=e.service.api.operations[e.operation];if(t){var r=t.idempotentMembers;if(r.length){for(var n=AWS.util.copy(e.params),i=0,o=r.length;i<o;i++)n[r[i]]||(n[r[i]]=AWS.util.uuid.v4());e.params=n}}}}),e("VALIDATE_PARAMETERS","validate",function(e){if(e.service.api.operations){var t=e.service.api.operations[e.operation].input,r=e.service.config.paramValidation;new AWS.ParamValidator(r).validate(t,e.params)}}),e("COMPUTE_CHECKSUM","afterBuild",function(e){if(e.service.api.operations){var t=e.service.api.operations[e.operation];if(t){var r=e.httpRequest.body,n=r&&(AWS.util.Buffer.isBuffer(r)||"string"==typeof r),i=e.httpRequest.headers;if(t.httpChecksumRequired&&e.service.config.computeChecksums&&n&&!i["Content-MD5"]){var o=AWS.util.crypto.md5(r,"base64");i["Content-MD5"]=o}}}}),t("COMPUTE_SHA256","afterBuild",function(e,t){if(e.haltHandlersOnError(),e.service.api.operations){var r=e.service.api.operations[e.operation],n=r?r.authtype:"";if(!e.service.api.signatureVersion&&!n&&!e.service.config.signatureVersion)return t();if(e.service.getSignerClass(e)===AWS.Signers.V4){var i=e.httpRequest.body||"";if(n.indexOf("unsigned-body")>=0)return e.httpRequest.headers["X-Amz-Content-Sha256"]="UNSIGNED-PAYLOAD",t();AWS.util.computeSha256(i,function(r,n){r?t(r):(e.httpRequest.headers["X-Amz-Content-Sha256"]=n,t())})}else t()}}),e("SET_CONTENT_LENGTH","afterBuild",function(e){var t=getOperationAuthtype(e),r=AWS.util.getRequestPayloadShape(e);if(void 0===e.httpRequest.headers["Content-Length"])try{var n=AWS.util.string.byteLength(e.httpRequest.body);e.httpRequest.headers["Content-Length"]=n}catch(n){if(r&&r.isStreaming){if(r.requiresLength)throw n;if(t.indexOf("unsigned-body")>=0)return void(e.httpRequest.headers["Transfer-Encoding"]="chunked");throw n}throw n}}),e("SET_HTTP_HOST","afterBuild",function(e){e.httpRequest.headers.Host=e.httpRequest.endpoint.host}),e("SET_TRACE_ID","afterBuild",function(e){if(AWS.util.isNode()&&!Object.hasOwnProperty.call(e.httpRequest.headers,"X-Amzn-Trace-Id")){var t=process.env.AWS_LAMBDA_FUNCTION_NAME,r=process.env._X_AMZN_TRACE_ID;"string"==typeof t&&t.length>0&&"string"==typeof r&&r.length>0&&(e.httpRequest.headers["X-Amzn-Trace-Id"]=r)}}),e("RESTART","restart",function(){var e=this.response.error;e&&e.retryable&&(this.httpRequest=new AWS.HttpRequest(this.service.endpoint,this.service.region),this.response.retryCount<this.service.config.maxRetries?this.response.retryCount++:this.response.error=null)});t("DISCOVER_ENDPOINT","sign",DISCOVER_ENDPOINT,!0),t("SIGN","sign",function(e,t){var r=e.service,n=getIdentityType(e);if(!n||0===n.length)return t();"bearer"===n?r.config.getToken(function(n,i){if(n)return e.response.error=n,t();try{new(r.getSignerClass(e))(e.httpRequest).addAuthorization(i)}catch(t){e.response.error=t}t()}):r.config.getCredentials(function(n,i){if(n)return e.response.error=n,t();try{var o=r.getSkewCorrectedDate(),s=r.getSignerClass(e),a=(e.service.api.operations||{})[e.operation],u=new s(e.httpRequest,r.getSigningName(e),{signatureCache:r.config.signatureCache,operation:a,signatureVersion:r.api.signatureVersion});u.setServiceClientId(r._clientId),delete e.httpRequest.headers.Authorization,delete e.httpRequest.headers.Date,delete e.httpRequest.headers["X-Amz-Date"],u.addAuthorization(i,o),e.signedAt=o}catch(t){e.response.error=t}t()})}),e("VALIDATE_RESPONSE","validateResponse",function(e){this.service.successfulResponse(e,this)?(e.data={},e.error=null):(e.data=null,e.error=AWS.util.error(new Error,{code:"UnknownError",message:"An unknown error occurred."}))}),e("ERROR","error",function(e,t){if(t.request.service.api.awsQueryCompatible){var r=t.httpResponse.headers,n=r?r["x-amzn-query-error"]:void 0;n&&n.includes(";")&&(t.error.code=n.split(";")[0])}},!0),t("SEND","send",function(e,t){function r(r){e.httpResponse.stream=r;var n=e.request.httpRequest.stream,i=e.request.service,o=i.api,s=e.request.operation,a=o.operations[s]||{};r.on("headers",function(n,o,s){if(e.request.emit("httpHeaders",[n,o,e,s]),!e.httpResponse.streaming)if(2===AWS.HttpClient.streamsApiVersion){if(a.hasEventOutput&&i.successfulResponse(e))return e.request.emit("httpDone"),void t();r.on("readable",function(){var t=r.read();null!==t&&e.request.emit("httpData",[t,e])})}else r.on("data",function(t){e.request.emit("httpData",[t,e])})}),r.on("end",function(){if(!n||!n.didCallback){if(2===AWS.HttpClient.streamsApiVersion&&a.hasEventOutput&&i.successfulResponse(e))return;e.request.emit("httpDone"),t()}})}function n(r){if("RequestAbortedError"!==r.code){var n="TimeoutError"===r.code?r.code:"NetworkingError";r=AWS.util.error(r,{code:n,region:e.request.httpRequest.region,hostname:e.request.httpRequest.endpoint.hostname,retryable:!0})}e.error=r,e.request.emit("httpError",[e.error,e],function(){t()})}function i(){var t,i=AWS.HttpClient.getInstance(),o=e.request.service.config.httpOptions||{};try{var s=i.handleRequest(e.request.httpRequest,o,r,n);(t=s).on("sendProgress",function(t){e.request.emit("httpUploadProgress",[t,e])}),t.on("receiveProgress",function(t){e.request.emit("httpDownloadProgress",[t,e])})}catch(e){n(e)}}e.httpResponse._abortCallback=t,e.error=null,e.data=null,(e.request.service.getSkewCorrectedDate()-this.signedAt)/1e3>=600?this.emit("sign",[this],function(e){e?t(e):i()}):i()}),e("HTTP_HEADERS","httpHeaders",function(e,t,r,n){r.httpResponse.statusCode=e,r.httpResponse.statusMessage=n,r.httpResponse.headers=t,r.httpResponse.body=AWS.util.buffer.toBuffer(""),r.httpResponse.buffers=[],r.httpResponse.numBytes=0;var i=t.date||t.Date,o=r.request.service;if(i){var s=Date.parse(i);o.config.correctClockSkew&&o.isClockSkewed(s)&&o.applyClockOffset(s)}}),e("HTTP_DATA","httpData",function(e,t){if(e){if(AWS.util.isNode()){t.httpResponse.numBytes+=e.length;var r=t.httpResponse.headers["content-length"],n={loaded:t.httpResponse.numBytes,total:r};t.request.emit("httpDownloadProgress",[n,t])}t.httpResponse.buffers.push(AWS.util.buffer.toBuffer(e))}}),e("HTTP_DONE","httpDone",function(e){if(e.httpResponse.buffers&&e.httpResponse.buffers.length>0){var t=AWS.util.buffer.concat(e.httpResponse.buffers);e.httpResponse.body=t}delete e.httpResponse.numBytes,delete e.httpResponse.buffers}),e("FINALIZE_ERROR","retry",function(e){e.httpResponse.statusCode&&(e.error.statusCode=e.httpResponse.statusCode,void 0===e.error.retryable&&(e.error.retryable=this.service.retryableError(e.error,this)))}),e("INVALIDATE_CREDENTIALS","retry",function(e){if(e.error)switch(e.error.code){case"RequestExpired":case"ExpiredTokenException":case"ExpiredToken":e.error.retryable=!0,e.request.service.config.credentials.expired=!0}}),e("EXPIRED_SIGNATURE","retry",function(e){var t=e.error;t&&"string"==typeof t.code&&"string"==typeof t.message&&t.code.match(/Signature/)&&t.message.match(/expired/)&&(e.error.retryable=!0)}),e("CLOCK_SKEWED","retry",function(e){e.error&&this.service.clockSkewError(e.error)&&this.service.config.correctClockSkew&&(e.error.retryable=!0)}),e("REDIRECT","retry",function(e){e.error&&e.error.statusCode>=300&&e.error.statusCode<400&&e.httpResponse.headers.location&&(this.httpRequest.endpoint=new AWS.Endpoint(e.httpResponse.headers.location),this.httpRequest.headers.Host=this.httpRequest.endpoint.host,e.error.redirect=!0,e.error.retryable=!0)}),e("RETRY_CHECK","retry",function(e){e.error&&(e.error.redirect&&e.redirectCount<e.maxRedirects?e.error.retryDelay=0:e.retryCount<e.maxRetries&&(e.error.retryDelay=this.service.retryDelays(e.retryCount,e.error)||0))}),t("RESET_RETRY_STATE","afterRetry",function(e,t){var r,n=!1;e.error&&(r=e.error.retryDelay||0,e.error.retryable&&e.retryCount<e.maxRetries?(e.retryCount++,n=!0):e.error.redirect&&e.redirectCount<e.maxRedirects&&(e.redirectCount++,n=!0)),n&&r>=0?(e.error=null,setTimeout(t,r)):t()})}),CorePost:(new SequentialExecutor).addNamedListeners(function(e){e("EXTRACT_REQUEST_ID","extractData",AWS.util.extractRequestId),e("EXTRACT_REQUEST_ID","extractError",AWS.util.extractRequestId),e("ENOTFOUND_ERROR","httpError",function(e){if("NetworkingError"===e.code&&function(e){return"ENOTFOUND"===e.errno||"number"==typeof e.errno&&"function"==typeof AWS.util.getSystemErrorName&&["EAI_NONAME","EAI_NODATA"].indexOf(AWS.util.getSystemErrorName(e.errno)>=0)}(e)){var t="Inaccessible host: `"+e.hostname+"' at port `"+e.port+"'. This service may not be available in the `"+e.region+"' region.";this.response.error=AWS.util.error(new Error(t),{code:"UnknownEndpoint",region:e.region,hostname:e.hostname,retryable:!0,originalError:e})}})}),Logger:(new SequentialExecutor).addNamedListeners(function(e){e("LOG_REQUEST","complete",function(e){var t=e.request,r=t.service.config.logger;if(r){var n=function(){var n=(e.request.service.getSkewCorrectedDate().getTime()-t.startTime.getTime())/1e3,i=!!r.isTTY,o=e.httpResponse.statusCode,s=t.params;t.service.api.operations&&t.service.api.operations[t.operation]&&t.service.api.operations[t.operation].input&&(s=function e(t,r){if(!r)return r;if(t.isSensitive)return"***SensitiveInformation***";switch(t.type){case"structure":var n={};return AWS.util.each(r,function(r,i){Object.prototype.hasOwnProperty.call(t.members,r)?n[r]=e(t.members[r],i):n[r]=i}),n;case"list":var i=[];return AWS.util.arrayEach(r,function(r,n){i.push(e(t.member,r))}),i;case"map":var o={};return AWS.util.each(r,function(r,n){o[r]=e(t.value,n)}),o;default:return r}}(t.service.api.operations[t.operation].input,t.params));var a=require("util").inspect(s,!0,null),u="";return i&&(u+="[33m"),u+="[AWS "+t.service.serviceIdentifier+" "+o,u+=" "+n.toString()+"s "+e.retryCount+" retries]",i&&(u+="[0;1m"),u+=" "+AWS.util.string.lowerFirst(t.operation),u+="("+a+")",i&&(u+="[0m"),u}();"function"==typeof r.log?r.log(n):"function"==typeof r.write&&r.write(n+"\n")}})}),Json:(new SequentialExecutor).addNamedListeners(function(e){var t=require("./protocol/json");e("BUILD","build",t.buildRequest),e("EXTRACT_DATA","extractData",t.extractData),e("EXTRACT_ERROR","extractError",t.extractError)}),Rest:(new SequentialExecutor).addNamedListeners(function(e){var t=require("./protocol/rest");e("BUILD","build",t.buildRequest),e("EXTRACT_DATA","extractData",t.extractData),e("EXTRACT_ERROR","extractError",t.extractError)}),RestJson:(new SequentialExecutor).addNamedListeners(function(e){var t=require("./protocol/rest_json");e("BUILD","build",t.buildRequest),e("EXTRACT_DATA","extractData",t.extractData),e("EXTRACT_ERROR","extractError",t.extractError),e("UNSET_CONTENT_LENGTH","afterBuild",t.unsetContentLength)}),RestXml:(new SequentialExecutor).addNamedListeners(function(e){var t=require("./protocol/rest_xml");e("BUILD","build",t.buildRequest),e("EXTRACT_DATA","extractData",t.extractData),e("EXTRACT_ERROR","extractError",t.extractError)}),Query:(new SequentialExecutor).addNamedListeners(function(e){var t=require("./protocol/query");e("BUILD","build",t.buildRequest),e("EXTRACT_DATA","extractData",t.extractData),e("EXTRACT_ERROR","extractError",t.extractError)})};

},{"./core":31,"./discover_endpoint":48,"./protocol/json":85,"./protocol/query":86,"./protocol/rest":87,"./protocol/rest_json":88,"./protocol/rest_xml":89,"./sequential_executor":100,"util":undefined}],65:[function(require,module,exports){
"use strict";var AWS=require("./core"),inherit=AWS.util.inherit;AWS.Endpoint=inherit({constructor:function(t,e){if(AWS.util.hideProperties(this,["slashes","auth","hash","search","query"]),null==t)throw new Error("Invalid endpoint: "+t);if("string"!=typeof t)return AWS.util.copy(t);t.match(/^http/)||(t=((e&&void 0!==e.sslEnabled?e.sslEnabled:AWS.config.sslEnabled)?"https":"http")+"://"+t);AWS.util.update(this,AWS.util.urlParse(t)),this.port?this.port=parseInt(this.port,10):this.port="https:"===this.protocol?443:80}}),AWS.HttpRequest=inherit({constructor:function(t,e){t=new AWS.Endpoint(t),this.method="POST",this.path=t.path||"/",this.headers={},this.body="",this.endpoint=t,this.region=e,this._userAgent="",this.setUserAgent()},setUserAgent:function(){this._userAgent=this.headers[this.getUserAgentHeaderName()]=AWS.util.userAgent()},getUserAgentHeaderName:function(){return(AWS.util.isBrowser()?"X-Amz-":"")+"User-Agent"},appendToUserAgent:function(t){"string"==typeof t&&t&&(this._userAgent+=" "+t),this.headers[this.getUserAgentHeaderName()]=this._userAgent},getUserAgent:function(){return this._userAgent},pathname:function(){return this.path.split("?",1)[0]},search:function(){var t=this.path.split("?",2)[1];return t?(t=AWS.util.queryStringParse(t),AWS.util.queryParamsToString(t)):""},updateEndpoint:function(t){var e=new AWS.Endpoint(t);this.endpoint=e,this.path=e.path||"/",this.headers.Host&&(this.headers.Host=e.host)}}),AWS.HttpResponse=inherit({constructor:function(){this.statusCode=void 0,this.headers={},this.body=void 0,this.streaming=!1,this.stream=null},createUnbufferedStream:function(){return this.streaming=!0,this.stream}}),AWS.HttpClient=inherit({}),AWS.HttpClient.getInstance=function(){return void 0===this.singleton&&(this.singleton=new this),this.singleton};

},{"./core":31}],66:[function(require,module,exports){
"use strict";var AWS=require("../core"),Stream=AWS.util.stream.Stream,TransformStream=AWS.util.stream.Transform,ReadableStream=AWS.util.stream.Readable;require("../http");var CONNECTION_REUSE_ENV_NAME="AWS_NODEJS_CONNECTION_REUSE_ENABLED";AWS.NodeHttpClient=AWS.util.inherit({handleRequest:function(e,t,r,o){var n=this,i=e.endpoint,a="";t||(t={}),t.proxy&&(a=i.protocol+"//"+i.hostname,80!==i.port&&443!==i.port&&(a+=":"+i.port),i=new AWS.Endpoint(t.proxy));var s="https:"===i.protocol,l=s?require("https"):require("http"),d={host:i.hostname,port:i.port,method:e.method,headers:e.headers,path:a+e.path};AWS.util.update(d,t),t.agent||(d.agent=this.getAgent(s,{keepAlive:"1"===process.env[CONNECTION_REUSE_ENV_NAME]})),delete d.proxy,delete d.timeout;var u,c=l.request(d,function(e){c.didCallback||(r(e),e.emit("headers",e.statusCode,e.headers,e.statusMessage))});(e.stream=c,c.didCallback=!1,t.connectTimeout)&&c.on("socket",function(e){e.connecting&&(u=setTimeout(function(){c.didCallback||(c.didCallback=!0,c.abort(),o(AWS.util.error(new Error("Socket timed out without establishing a connection"),{code:"TimeoutError"})))},t.connectTimeout),e.on("connect",function(){clearTimeout(u),u=null}))});return c.setTimeout(t.timeout||0,function(){if(!c.didCallback){c.didCallback=!0;var e="Connection timed out after "+t.timeout+"ms";o(AWS.util.error(new Error(e),{code:"TimeoutError"})),c.abort()}}),c.on("error",function(e){u&&(clearTimeout(u),u=null),c.didCallback||(c.didCallback=!0,"ECONNRESET"===e.code||"EPIPE"===e.code||"ETIMEDOUT"===e.code?o(AWS.util.error(e,{code:"TimeoutError"})):o(e))}),"100-continue"===(e.headers.Expect||e.headers.expect)?c.once("continue",function(){n.writeBody(c,e)}):this.writeBody(c,e),c},writeBody:function(e,t){var r=t.body,o=parseInt(t.headers["Content-Length"],10);if(r instanceof Stream){var n=this.progressStream(e,o);n?r.pipe(n).pipe(e):r.pipe(e)}else r?(e.once("finish",function(){e.emit("sendProgress",{loaded:o,total:o})}),e.end(r)):e.end()},getAgent:function(e,t){var r=e?require("https"):require("http");return e?(AWS.NodeHttpClient.sslAgent||(AWS.NodeHttpClient.sslAgent=new r.Agent(AWS.util.merge({rejectUnauthorized:"0"!==process.env.NODE_TLS_REJECT_UNAUTHORIZED},t||{})),AWS.NodeHttpClient.sslAgent.setMaxListeners(0),Object.defineProperty(AWS.NodeHttpClient.sslAgent,"maxSockets",{enumerable:!0,get:function(){var e=r.globalAgent;return e&&e.maxSockets!==1/0&&"number"==typeof e.maxSockets?e.maxSockets:50}})),AWS.NodeHttpClient.sslAgent):(AWS.NodeHttpClient.agent||(AWS.NodeHttpClient.agent=new r.Agent(t)),AWS.NodeHttpClient.agent)},progressStream:function(e,t){if(void 0!==TransformStream){var r=0,o=new TransformStream;return o._transform=function(o,n,i){o&&(r+=o.length,e.emit("sendProgress",{loaded:r,total:t})),i(null,o)},o}},emitter:null}),AWS.HttpClient.prototype=AWS.NodeHttpClient.prototype,AWS.HttpClient.streamsApiVersion=ReadableStream?2:1;

},{"../core":31,"../http":65,"http":undefined,"https":undefined}],67:[function(require,module,exports){
"use strict";var util=require("../util");function JsonBuilder(){}function translate(t,r){if(r&&null!=t)switch(r.type){case"structure":return translateStructure(t,r);case"map":return translateMap(t,r);case"list":return translateList(t,r);default:return translateScalar(t,r)}}function translateStructure(t,r){if(r.isDocument)return t;var a={};return util.each(t,function(t,n){var e=r.members[t];if(e){if("body"!==e.location)return;var u=e.isLocationName?e.name:t,i=translate(n,e);void 0!==i&&(a[u]=i)}}),a}function translateList(t,r){var a=[];return util.arrayEach(t,function(t){var n=translate(t,r.member);void 0!==n&&a.push(n)}),a}function translateMap(t,r){var a={};return util.each(t,function(t,n){var e=translate(n,r.value);void 0!==e&&(a[t]=e)}),a}function translateScalar(t,r){return r.toWireFormat(t)}JsonBuilder.prototype.build=function(t,r){return JSON.stringify(translate(t,r))},module.exports=JsonBuilder;

},{"../util":119}],68:[function(require,module,exports){
"use strict";var util=require("../util");function JsonParser(){}function translate(t,r){if(r&&void 0!==t)switch(r.type){case"structure":return translateStructure(t,r);case"map":return translateMap(t,r);case"list":return translateList(t,r);default:return translateScalar(t,r)}}function translateStructure(t,r){if(null!=t){if(r.isDocument)return t;var a={},e=r.members;return util.each(e,function(r,e){var n=e.isLocationName?e.name:r;if(Object.prototype.hasOwnProperty.call(t,n)){var u=translate(t[n],e);void 0!==u&&(a[r]=u)}}),a}}function translateList(t,r){if(null!=t){var a=[];return util.arrayEach(t,function(t){var e=translate(t,r.member);void 0===e?a.push(null):a.push(e)}),a}}function translateMap(t,r){if(null!=t){var a={};return util.each(t,function(t,e){var n=translate(e,r.value);a[t]=void 0===n?null:n}),a}}function translateScalar(t,r){return r.toType(t)}JsonParser.prototype.parse=function(t,r){return translate(JSON.parse(t),r)},module.exports=JsonParser;

},{"../util":119}],69:[function(require,module,exports){
"use strict";function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}var warning=["We are formalizing our plans to enter AWS SDK for JavaScript (v2) into maintenance mode in 2023.\n","Please migrate your code to use AWS SDK for JavaScript (v3).","For more information, check the migration guide at https://a.co/7PzMCcy"].join("\n");function emitWarning(){"undefined"!=typeof process&&("object"===_typeof(process.env)&&void 0!==process.env.AWS_EXECUTION_ENV&&0===process.env.AWS_EXECUTION_ENV.indexOf("AWS_Lambda_")||"object"===_typeof(process.env)&&void 0!==process.env.AWS_SDK_JS_SUPPRESS_MAINTENANCE_MODE_MESSAGE||"function"==typeof process.emitWarning&&process.emitWarning(warning,{type:"NOTE"}))}module.exports={suppress:!1},setTimeout(function(){module.exports.suppress||emitWarning()},0);

},{}],70:[function(require,module,exports){
"use strict";var AWS=require("./core");require("./http");var inherit=AWS.util.inherit,getMetadataServiceEndpoint=require("./metadata_service/get_metadata_service_endpoint"),URL=require("url").URL;AWS.MetadataService=inherit({endpoint:getMetadataServiceEndpoint(),httpOptions:{timeout:0},disableFetchToken:!1,constructor:function(e){e&&e.host&&(e.endpoint="http://"+e.host,delete e.host),AWS.util.update(this,e)},request:function(e,t,a){if(2===arguments.length&&(a=t,t={}),process.env[AWS.util.imdsDisabledEnv])a(new Error("EC2 Instance Metadata Service access disabled"));else{e=e||"/",URL&&new URL(this.endpoint);var r=new AWS.HttpRequest(this.endpoint+e);r.method=t.method||"GET",t.headers&&(r.headers=t.headers),AWS.util.handleRequestWithRetries(r,this,a)}},loadCredentialsCallbacks:[],fetchMetadataToken:function(e){this.request("/latest/api/token",{method:"PUT",headers:{"x-aws-ec2-metadata-token-ttl-seconds":"21600"}},e)},fetchCredentials:function(e,t){var a=this,r="/latest/meta-data/iam/security-credentials/";a.request(r,e,function(i,s){if(i)return a.disableFetchToken=!(401===i.statusCode),void t(AWS.util.error(i,{message:"EC2 Metadata roleName request returned error"}));s=s.split("\n")[0],a.request(r+s,e,function(e,r){if(e)return a.disableFetchToken=!(401===e.statusCode),void t(AWS.util.error(e,{message:"EC2 Metadata creds request returned error"}));try{var i=JSON.parse(r);t(null,i)}catch(e){t(e)}})})},loadCredentials:function(e){var t=this;function a(e,a){for(var r;void 0!==(r=t.loadCredentialsCallbacks.shift());)r(e,a)}t.loadCredentialsCallbacks.push(e),t.loadCredentialsCallbacks.length>1||(t.disableFetchToken?t.fetchCredentials({},a):t.fetchMetadataToken(function(e,r){if(e)if("TimeoutError"===e.code)t.disableFetchToken=!0;else{if(!0===e.retryable)return void a(AWS.util.error(e,{message:"EC2 Metadata token request returned error"}));if(400===e.statusCode)return void a(AWS.util.error(e,{message:"EC2 Metadata token request returned 400"}))}var i={};r&&(i.headers={"x-aws-ec2-metadata-token":r}),t.fetchCredentials(i,a)}))}}),module.exports=AWS.MetadataService;

},{"./core":31,"./http":65,"./metadata_service/get_metadata_service_endpoint":75,"url":undefined}],71:[function(require,module,exports){
"use strict";var getEndpoint=function(){return{IPv4:"http://169.254.169.254",IPv6:"http://[fd00:ec2::254]"}};module.exports=getEndpoint;

},{}],72:[function(require,module,exports){
"use strict";var ENV_ENDPOINT_NAME="AWS_EC2_METADATA_SERVICE_ENDPOINT",CONFIG_ENDPOINT_NAME="ec2_metadata_service_endpoint",getEndpointConfigOptions=function(){return{environmentVariableSelector:function(n){return n[ENV_ENDPOINT_NAME]},configFileSelector:function(n){return n[CONFIG_ENDPOINT_NAME]},default:void 0}};module.exports=getEndpointConfigOptions;

},{}],73:[function(require,module,exports){
"use strict";var getEndpointMode=function(){return{IPv4:"IPv4",IPv6:"IPv6"}};module.exports=getEndpointMode;

},{}],74:[function(require,module,exports){
"use strict";var EndpointMode=require("./get_endpoint_mode")(),ENV_ENDPOINT_MODE_NAME="AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE",CONFIG_ENDPOINT_MODE_NAME="ec2_metadata_service_endpoint_mode",getEndpointModeConfigOptions=function(){return{environmentVariableSelector:function(e){return e[ENV_ENDPOINT_MODE_NAME]},configFileSelector:function(e){return e[CONFIG_ENDPOINT_MODE_NAME]},default:EndpointMode.IPv4}};module.exports=getEndpointModeConfigOptions;

},{"./get_endpoint_mode":73}],75:[function(require,module,exports){
"use strict";var AWS=require("../core"),Endpoint=require("./get_endpoint")(),EndpointMode=require("./get_endpoint_mode")(),ENDPOINT_CONFIG_OPTIONS=require("./get_endpoint_config_options")(),ENDPOINT_MODE_CONFIG_OPTIONS=require("./get_endpoint_mode_config_options")(),getMetadataServiceEndpoint=function(){var e=AWS.util.loadConfig(ENDPOINT_CONFIG_OPTIONS);if(void 0!==e)return e;var n=AWS.util.loadConfig(ENDPOINT_MODE_CONFIG_OPTIONS);switch(n){case EndpointMode.IPv4:return Endpoint.IPv4;case EndpointMode.IPv6:return Endpoint.IPv6;default:throw new Error("Unsupported endpoint mode: "+n)}};module.exports=getMetadataServiceEndpoint;

},{"../core":31,"./get_endpoint":71,"./get_endpoint_config_options":72,"./get_endpoint_mode":73,"./get_endpoint_mode_config_options":74}],76:[function(require,module,exports){
"use strict";var Collection=require("./collection"),Operation=require("./operation"),Shape=require("./shape"),Paginator=require("./paginator"),ResourceWaiter=require("./resource_waiter"),metadata=require("../../apis/metadata.json"),util=require("../util"),property=util.property,memoizedProperty=util.memoizedProperty;function Api(e,t){var r=this;e=e||{},(t=t||{}).api=this,e.metadata=e.metadata||{};var i=t.serviceIdentifier;delete t.serviceIdentifier,property(this,"isApi",!0,!1),property(this,"apiVersion",e.metadata.apiVersion),property(this,"endpointPrefix",e.metadata.endpointPrefix),property(this,"signingName",e.metadata.signingName),property(this,"globalEndpoint",e.metadata.globalEndpoint),property(this,"signatureVersion",e.metadata.signatureVersion),property(this,"jsonVersion",e.metadata.jsonVersion),property(this,"targetPrefix",e.metadata.targetPrefix),property(this,"protocol",e.metadata.protocol),property(this,"timestampFormat",e.metadata.timestampFormat),property(this,"xmlNamespaceUri",e.metadata.xmlNamespace),property(this,"abbreviation",e.metadata.serviceAbbreviation),property(this,"fullName",e.metadata.serviceFullName),property(this,"serviceId",e.metadata.serviceId),i&&metadata[i]&&property(this,"xmlNoDefaultLists",metadata[i].xmlNoDefaultLists,!1),memoizedProperty(this,"className",function(){var t=e.metadata.serviceAbbreviation||e.metadata.serviceFullName;return t?("ElasticLoadBalancing"===(t=t.replace(/^Amazon|AWS\s*|\(.*|\s+|\W+/g,""))&&(t="ELB"),t):null}),property(this,"operations",new Collection(e.operations,t,function(e,r){return new Operation(e,r,t)},util.string.lowerFirst,function(e,t){!0===t.endpointoperation&&property(r,"endpointOperation",util.string.lowerFirst(e)),t.endpointdiscovery&&!r.hasRequiredEndpointDiscovery&&property(r,"hasRequiredEndpointDiscovery",!0===t.endpointdiscovery.required)})),property(this,"shapes",new Collection(e.shapes,t,function(e,r){return Shape.create(r,t)})),property(this,"paginators",new Collection(e.paginators,t,function(e,r){return new Paginator(e,r,t)})),property(this,"waiters",new Collection(e.waiters,t,function(e,r){return new ResourceWaiter(e,r,t)},util.string.lowerFirst)),t.documentation&&(property(this,"documentation",e.documentation),property(this,"documentationUrl",e.documentationUrl)),property(this,"awsQueryCompatible",e.metadata.awsQueryCompatible)}module.exports=Api;

},{"../../apis/metadata.json":22,"../util":119,"./collection":77,"./operation":78,"./paginator":79,"./resource_waiter":80,"./shape":81}],77:[function(require,module,exports){
"use strict";var memoizedProperty=require("../util").memoizedProperty;function memoize(e,o,t,r){memoizedProperty(this,r(e),function(){return t(e,o)})}function Collection(e,o,t,r,i){r=r||String;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(memoize.call(this,n,e[n],t,r),i&&i(n,e[n]))}module.exports=Collection;

},{"../util":119}],78:[function(require,module,exports){
"use strict";var Shape=require("./shape"),util=require("../util"),property=util.property,memoizedProperty=util.memoizedProperty;function Operation(t,e,r){var p=this;r=r||{},property(this,"name",e.name||t),property(this,"api",r.api,!1),e.http=e.http||{},property(this,"endpoint",e.endpoint),property(this,"httpMethod",e.http.method||"POST"),property(this,"httpPath",e.http.requestUri||"/"),property(this,"authtype",e.authtype||""),property(this,"endpointDiscoveryRequired",e.endpointdiscovery?e.endpointdiscovery.required?"REQUIRED":"OPTIONAL":"NULL");var i=e.httpChecksumRequired||e.httpChecksum&&e.httpChecksum.requestChecksumRequired;property(this,"httpChecksumRequired",i,!1),memoizedProperty(this,"input",function(){return e.input?Shape.create(e.input,r):new Shape.create({type:"structure"},r)}),memoizedProperty(this,"output",function(){return e.output?Shape.create(e.output,r):new Shape.create({type:"structure"},r)}),memoizedProperty(this,"errors",function(){var t=[];if(!e.errors)return null;for(var p=0;p<e.errors.length;p++)t.push(Shape.create(e.errors[p],r));return t}),memoizedProperty(this,"paginator",function(){return r.api.paginators[t]}),r.documentation&&(property(this,"documentation",e.documentation),property(this,"documentationUrl",e.documentationUrl)),memoizedProperty(this,"idempotentMembers",function(){var t=[],e=p.input,r=e.members;if(!e.members)return t;for(var i in r)r.hasOwnProperty(i)&&!0===r[i].isIdempotent&&t.push(i);return t}),memoizedProperty(this,"hasEventOutput",function(){return hasEventStream(p.output)})}function hasEventStream(t){var e=t.members,r=t.payload;if(!t.members)return!1;if(r)return e[r].isEventStream;for(var p in e)if(!e.hasOwnProperty(p)&&!0===e[p].isEventStream)return!0;return!1}module.exports=Operation;

},{"../util":119,"./shape":81}],79:[function(require,module,exports){
"use strict";var property=require("../util").property;function Paginator(t,e){property(this,"inputToken",e.input_token),property(this,"limitKey",e.limit_key),property(this,"moreResults",e.more_results),property(this,"outputToken",e.output_token),property(this,"resultKey",e.result_key)}module.exports=Paginator;

},{"../util":119}],80:[function(require,module,exports){
"use strict";var util=require("../util"),property=util.property;function ResourceWaiter(r,t,e){e=e||{},property(this,"name",r),property(this,"api",e.api,!1),t.operation&&property(this,"operation",util.string.lowerFirst(t.operation));var i=this;["type","description","delay","maxAttempts","acceptors"].forEach(function(r){var e=t[r];e&&property(i,r,e)})}module.exports=ResourceWaiter;

},{"../util":119}],81:[function(require,module,exports){
"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Collection=require("./collection"),util=require("../util");function property(e,t,r){null!=r&&util.property.apply(this,arguments)}function memoizedProperty(e,t){e.constructor.prototype[t]||util.memoizedProperty.apply(this,arguments)}function Shape(e,t,r){t=t||{},property(this,"shape",e.shape),property(this,"api",t.api,!1),property(this,"type",e.type),property(this,"enum",e.enum),property(this,"min",e.min),property(this,"max",e.max),property(this,"pattern",e.pattern),property(this,"location",e.location||this.location||"body"),property(this,"name",this.name||e.xmlName||e.queryName||e.locationName||r),property(this,"isStreaming",e.streaming||this.isStreaming||!1),property(this,"requiresLength",e.requiresLength,!1),property(this,"isComposite",e.isComposite||!1),property(this,"isShape",!0,!1),property(this,"isQueryName",Boolean(e.queryName),!1),property(this,"isLocationName",Boolean(e.locationName),!1),property(this,"isIdempotent",!0===e.idempotencyToken),property(this,"isJsonValue",!0===e.jsonvalue),property(this,"isSensitive",!0===e.sensitive||e.prototype&&!0===e.prototype.sensitive),property(this,"isEventStream",Boolean(e.eventstream),!1),property(this,"isEvent",Boolean(e.event),!1),property(this,"isEventPayload",Boolean(e.eventpayload),!1),property(this,"isEventHeader",Boolean(e.eventheader),!1),property(this,"isTimestampFormatSet",Boolean(e.timestampFormat)||e.prototype&&!0===e.prototype.isTimestampFormatSet,!1),property(this,"endpointDiscoveryId",Boolean(e.endpointdiscoveryid),!1),property(this,"hostLabel",Boolean(e.hostLabel),!1),t.documentation&&(property(this,"documentation",e.documentation),property(this,"documentationUrl",e.documentationUrl)),e.xmlAttribute&&property(this,"isXmlAttribute",e.xmlAttribute||!1),property(this,"defaultValue",null),this.toWireFormat=function(e){return null==e?"":e},this.toType=function(e){return e}}function CompositeShape(e){Shape.apply(this,arguments),property(this,"isComposite",!0),e.flattened&&property(this,"flattened",e.flattened||!1)}function StructureShape(e,t){var r=this,i=null,p=!this.isShape;CompositeShape.apply(this,arguments),p&&(property(this,"defaultValue",function(){return{}}),property(this,"members",{}),property(this,"memberNames",[]),property(this,"required",[]),property(this,"isRequired",function(){return!1}),property(this,"isDocument",Boolean(e.document))),e.members&&(property(this,"members",new Collection(e.members,t,function(e,r){return Shape.create(r,t,e)})),memoizedProperty(this,"memberNames",function(){return e.xmlOrder||Object.keys(e.members)}),e.event&&(memoizedProperty(this,"eventPayloadMemberName",function(){for(var e=r.members,t=r.memberNames,i=0,p=t.length;i<p;i++)if(e[t[i]].isEventPayload)return t[i]}),memoizedProperty(this,"eventHeaderMemberNames",function(){for(var e=r.members,t=r.memberNames,i=[],p=0,o=t.length;p<o;p++)e[t[p]].isEventHeader&&i.push(t[p]);return i}))),e.required&&(property(this,"required",e.required),property(this,"isRequired",function(t){if(!i){i={};for(var r=0;r<e.required.length;r++)i[e.required[r]]=!0}return i[t]},!1,!0)),property(this,"resultWrapper",e.resultWrapper||null),e.payload&&property(this,"payload",e.payload),"string"==typeof e.xmlNamespace?property(this,"xmlNamespaceUri",e.xmlNamespace):"object"===_typeof(e.xmlNamespace)&&(property(this,"xmlNamespacePrefix",e.xmlNamespace.prefix),property(this,"xmlNamespaceUri",e.xmlNamespace.uri))}function ListShape(e,t){var r=this,i=!this.isShape;if(CompositeShape.apply(this,arguments),i&&property(this,"defaultValue",function(){return[]}),e.member&&memoizedProperty(this,"member",function(){return Shape.create(e.member,t)}),this.flattened){var p=this.name;memoizedProperty(this,"name",function(){return r.member.name||p})}}function MapShape(e,t){var r=!this.isShape;CompositeShape.apply(this,arguments),r&&(property(this,"defaultValue",function(){return{}}),property(this,"key",Shape.create({type:"string"},t)),property(this,"value",Shape.create({type:"string"},t))),e.key&&memoizedProperty(this,"key",function(){return Shape.create(e.key,t)}),e.value&&memoizedProperty(this,"value",function(){return Shape.create(e.value,t)})}function TimestampShape(e){var t=this;if(Shape.apply(this,arguments),e.timestampFormat)property(this,"timestampFormat",e.timestampFormat);else if(t.isTimestampFormatSet&&this.timestampFormat)property(this,"timestampFormat",this.timestampFormat);else if("header"===this.location)property(this,"timestampFormat","rfc822");else if("querystring"===this.location)property(this,"timestampFormat","iso8601");else if(this.api)switch(this.api.protocol){case"json":case"rest-json":property(this,"timestampFormat","unixTimestamp");break;case"rest-xml":case"query":case"ec2":property(this,"timestampFormat","iso8601")}this.toType=function(e){return null==e?null:"function"==typeof e.toUTCString?e:"string"==typeof e||"number"==typeof e?util.date.parseTimestamp(e):null},this.toWireFormat=function(e){return util.date.format(e,t.timestampFormat)}}function StringShape(){Shape.apply(this,arguments);var e=["rest-xml","query","ec2"];this.toType=function(t){return t=this.api&&e.indexOf(this.api.protocol)>-1?t||"":t,this.isJsonValue?JSON.parse(t):t&&"function"==typeof t.toString?t.toString():t},this.toWireFormat=function(e){return this.isJsonValue?JSON.stringify(e):e}}function FloatShape(){Shape.apply(this,arguments),this.toType=function(e){return null==e?null:parseFloat(e)},this.toWireFormat=this.toType}function IntegerShape(){Shape.apply(this,arguments),this.toType=function(e){return null==e?null:parseInt(e,10)},this.toWireFormat=this.toType}function BinaryShape(){Shape.apply(this,arguments),this.toType=function(e){var t=util.base64.decode(e);if(this.isSensitive&&util.isNode()&&"function"==typeof util.Buffer.alloc){var r=util.Buffer.alloc(t.length,t);t.fill(0),t=r}return t},this.toWireFormat=util.base64.encode}function Base64Shape(){BinaryShape.apply(this,arguments)}function BooleanShape(){Shape.apply(this,arguments),this.toType=function(e){return"boolean"==typeof e?e:null==e?null:"true"===e}}Shape.normalizedTypes={character:"string",double:"float",long:"integer",short:"integer",biginteger:"integer",bigdecimal:"float",blob:"binary"},Shape.types={structure:StructureShape,list:ListShape,map:MapShape,boolean:BooleanShape,timestamp:TimestampShape,float:FloatShape,integer:IntegerShape,string:StringShape,base64:Base64Shape,binary:BinaryShape},Shape.resolve=function(e,t){if(e.shape){var r=t.api.shapes[e.shape];if(!r)throw new Error("Cannot find shape reference: "+e.shape);return r}return null},Shape.create=function(e,t,r){if(e.isShape)return e;var i=Shape.resolve(e,t);if(i){var p=Object.keys(e);t.documentation||(p=p.filter(function(e){return!e.match(/documentation/)}));var o=function(){i.constructor.call(this,e,t,r)};return o.prototype=i,new o}e.type||(e.members?e.type="structure":e.member?e.type="list":e.key?e.type="map":e.type="string");var a=e.type;if(Shape.normalizedTypes[e.type]&&(e.type=Shape.normalizedTypes[e.type]),Shape.types[e.type])return new Shape.types[e.type](e,t,r);throw new Error("Unrecognized shape type: "+a)},Shape.shapes={StructureShape:StructureShape,ListShape:ListShape,MapShape:MapShape,StringShape:StringShape,BooleanShape:BooleanShape,Base64Shape:Base64Shape},module.exports=Shape;

},{"../util":119,"./collection":77}],82:[function(require,module,exports){
"use strict";var AWS,util=require("./util"),region_utils=require("./region/utils"),isFipsRegion=region_utils.isFipsRegion,getRealRegion=region_utils.getRealRegion;util.isBrowser=function(){return!1},util.isNode=function(){return!0},util.crypto.lib=require("crypto"),util.Buffer=require("buffer").Buffer,util.domain=require("domain"),util.stream=require("stream"),util.url=require("url"),util.querystring=require("querystring"),util.environment="nodejs",util.createEventStream=util.stream.Readable?require("./event-stream/streaming-create-event-stream").createEventStream:require("./event-stream/buffered-create-event-stream").createEventStream,util.realClock=require("./realclock/nodeClock"),util.clientSideMonitoring={Publisher:require("./publisher").Publisher,configProvider:require("./publisher/configuration")},util.iniLoader=require("./shared-ini").iniLoader,util.getSystemErrorName=require("util").getSystemErrorName,util.loadConfig=function(e){var r=e.environmentVariableSelector(process.env);if(void 0!==r)return r;var i={};try{i=util.iniLoader?util.iniLoader.loadFrom({isConfig:!0,filename:process.env[util.sharedConfigFileEnv]}):{}}catch(e){}var n=i[process.env.AWS_PROFILE||util.defaultProfile]||{},t=e.configFileSelector(n);return void 0!==t?t:"function"==typeof e.default?e.default():e.default},module.exports=AWS=require("./core"),require("./credentials"),require("./credentials/credential_provider_chain"),require("./credentials/temporary_credentials"),require("./credentials/chainable_temporary_credentials"),require("./credentials/web_identity_credentials"),require("./credentials/cognito_identity_credentials"),require("./credentials/saml_credentials"),require("./credentials/process_credentials"),AWS.XML.Parser=require("./xml/node_parser"),require("./http/node"),require("./shared-ini/ini-loader"),require("./credentials/token_file_web_identity_credentials"),require("./credentials/ec2_metadata_credentials"),require("./credentials/remote_credentials"),require("./credentials/ecs_credentials"),require("./credentials/environment_credentials"),require("./credentials/file_system_credentials"),require("./credentials/shared_ini_file_credentials"),require("./credentials/process_credentials"),require("./credentials/sso_credentials"),AWS.CredentialProviderChain.defaultProviders=[function(){return new AWS.EnvironmentCredentials("AWS")},function(){return new AWS.EnvironmentCredentials("AMAZON")},function(){return new AWS.SsoCredentials},function(){return new AWS.SharedIniFileCredentials},function(){return new AWS.ECSCredentials},function(){return new AWS.ProcessCredentials},function(){return new AWS.TokenFileWebIdentityCredentials},function(){return new AWS.EC2MetadataCredentials}],require("./token"),require("./token/token_provider_chain"),require("./token/sso_token_provider"),AWS.TokenProviderChain.defaultProviders=[function(){return new AWS.SSOTokenProvider}];var getRegion=function(){var e=process.env,r=e.AWS_REGION||e.AMAZON_REGION;if(e[AWS.util.configOptInEnv])for(var i=[{filename:e[AWS.util.sharedCredentialsFileEnv]},{isConfig:!0,filename:e[AWS.util.sharedConfigFileEnv]}],n=AWS.util.iniLoader;!r&&i.length;){var t={},o=i.shift();try{t=n.loadFrom(o)}catch(e){if(o.isConfig)throw e}var u=t[e.AWS_PROFILE||AWS.util.defaultProfile];r=u&&u.region}return r},getBooleanValue=function(e){return"true"===e||"false"!==e&&void 0},USE_FIPS_ENDPOINT_CONFIG_OPTIONS={environmentVariableSelector:function(e){return getBooleanValue(e.AWS_USE_FIPS_ENDPOINT)},configFileSelector:function(e){return getBooleanValue(e.use_fips_endpoint)},default:!1},USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS={environmentVariableSelector:function(e){return getBooleanValue(e.AWS_USE_DUALSTACK_ENDPOINT)},configFileSelector:function(e){return getBooleanValue(e.use_dualstack_endpoint)},default:!1};AWS.util.update(AWS.Config.prototype.keys,{credentials:function(){var e=null;return new AWS.CredentialProviderChain([function(){return new AWS.EnvironmentCredentials("AWS")},function(){return new AWS.EnvironmentCredentials("AMAZON")},function(){return new AWS.SharedIniFileCredentials({disableAssumeRole:!0})}]).resolve(function(r,i){r||(e=i)}),e},credentialProvider:function(){return new AWS.CredentialProviderChain},logger:function(){return process.env.AWSJS_DEBUG?console:null},region:function(){var e=getRegion();return e?getRealRegion(e):void 0},tokenProvider:function(){return new AWS.TokenProviderChain},useFipsEndpoint:function(){var e=getRegion();return!!isFipsRegion(e)||util.loadConfig(USE_FIPS_ENDPOINT_CONFIG_OPTIONS)},useDualstackEndpoint:function(){return util.loadConfig(USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS)}}),AWS.config=new AWS.Config;

},{"./core":31,"./credentials":32,"./credentials/chainable_temporary_credentials":33,"./credentials/cognito_identity_credentials":34,"./credentials/credential_provider_chain":35,"./credentials/ec2_metadata_credentials":36,"./credentials/ecs_credentials":37,"./credentials/environment_credentials":38,"./credentials/file_system_credentials":39,"./credentials/process_credentials":40,"./credentials/remote_credentials":41,"./credentials/saml_credentials":42,"./credentials/shared_ini_file_credentials":43,"./credentials/sso_credentials":44,"./credentials/temporary_credentials":45,"./credentials/token_file_web_identity_credentials":46,"./credentials/web_identity_credentials":47,"./event-stream/buffered-create-event-stream":55,"./event-stream/streaming-create-event-stream":63,"./http/node":66,"./publisher":91,"./publisher/configuration":90,"./realclock/nodeClock":93,"./region/utils":94,"./shared-ini":104,"./shared-ini/ini-loader":105,"./token":116,"./token/sso_token_provider":117,"./token/token_provider_chain":118,"./util":119,"./xml/node_parser":123,"buffer":undefined,"crypto":undefined,"domain":undefined,"querystring":undefined,"stream":undefined,"url":undefined,"util":undefined}],83:[function(require,module,exports){
"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var AWS=require("./core");AWS.ParamValidator=AWS.util.inherit({constructor:function(e){!0!==e&&void 0!==e||(e={min:!0}),this.validation=e},validate:function(e,t,r){if(this.errors=[],this.validateMember(e,t||{},r||"params"),this.errors.length>1){var i=this.errors.join("\n* ");throw i="There were "+this.errors.length+" validation errors:\n* "+i,AWS.util.error(new Error(i),{code:"MultipleValidationErrors",errors:this.errors})}if(1===this.errors.length)throw this.errors[0];return!0},fail:function(e,t){this.errors.push(AWS.util.error(new Error(t),{code:e}))},validateStructure:function(e,t,r){if(e.isDocument)return!0;var i;this.validateType(t,r,["object"],"structure");for(var a=0;e.required&&a<e.required.length;a++){var n=t[i=e.required[a]];null==n&&this.fail("MissingRequiredParameter","Missing required key '"+i+"' in "+r)}for(i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var o=t[i],l=e.members[i];if(void 0!==l){var s=[r,i].join(".");this.validateMember(l,o,s)}else null!=o&&this.fail("UnexpectedParameter","Unexpected key '"+i+"' found in "+r)}return!0},validateMember:function(e,t,r){switch(e.type){case"structure":return this.validateStructure(e,t,r);case"list":return this.validateList(e,t,r);case"map":return this.validateMap(e,t,r);default:return this.validateScalar(e,t,r)}},validateList:function(e,t,r){if(this.validateType(t,r,[Array])){this.validateRange(e,t.length,r,"list member count");for(var i=0;i<t.length;i++)this.validateMember(e.member,t[i],r+"["+i+"]")}},validateMap:function(e,t,r){if(this.validateType(t,r,["object"],"map")){var i=0;for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(this.validateMember(e.key,a,r+"[key='"+a+"']"),this.validateMember(e.value,t[a],r+"['"+a+"']"),i++);this.validateRange(e,i,r,"map member count")}},validateScalar:function(e,t,r){switch(e.type){case null:case void 0:case"string":return this.validateString(e,t,r);case"base64":case"binary":return this.validatePayload(t,r);case"integer":case"float":return this.validateNumber(e,t,r);case"boolean":return this.validateType(t,r,["boolean"]);case"timestamp":return this.validateType(t,r,[Date,/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/,"number"],"Date object, ISO-8601 string, or a UNIX timestamp");default:return this.fail("UnkownType","Unhandled type "+e.type+" for "+r)}},validateString:function(e,t,r){var i=["string"];e.isJsonValue&&(i=i.concat(["number","object","boolean"])),null!==t&&this.validateType(t,r,i)&&(this.validateEnum(e,t,r),this.validateRange(e,t.length,r,"string length"),this.validatePattern(e,t,r),this.validateUri(e,t,r))},validateUri:function(e,t,r){"uri"===e.location&&0===t.length&&this.fail("UriParameterError",'Expected uri parameter to have length >= 1, but found "'+t+'" for '+r)},validatePattern:function(e,t,r){this.validation.pattern&&void 0!==e.pattern&&(new RegExp(e.pattern).test(t)||this.fail("PatternMatchError",'Provided value "'+t+'" does not match regex pattern /'+e.pattern+"/ for "+r))},validateRange:function(e,t,r,i){this.validation.min&&void 0!==e.min&&t<e.min&&this.fail("MinRangeError","Expected "+i+" >= "+e.min+", but found "+t+" for "+r),this.validation.max&&void 0!==e.max&&t>e.max&&this.fail("MaxRangeError","Expected "+i+" <= "+e.max+", but found "+t+" for "+r)},validateEnum:function(e,t,r){this.validation.enum&&void 0!==e.enum&&-1===e.enum.indexOf(t)&&this.fail("EnumError","Found string value of "+t+", but expected "+e.enum.join("|")+" for "+r)},validateType:function(e,t,r,i){if(null==e)return!1;for(var a=!1,n=0;n<r.length;n++){if("string"==typeof r[n]){if(_typeof(e)===r[n])return!0}else if(r[n]instanceof RegExp){if((e||"").toString().match(r[n]))return!0}else{if(e instanceof r[n])return!0;if(AWS.util.isType(e,r[n]))return!0;i||a||(r=r.slice()),r[n]=AWS.util.typeName(r[n])}a=!0}var o=i;o||(o=r.join(", ").replace(/,([^,]+)$/,", or$1"));var l=o.match(/^[aeiou]/i)?"n":"";return this.fail("InvalidParameterType","Expected "+t+" to be a"+l+" "+o),!1},validateNumber:function(e,t,r){if(null!=t){if("string"==typeof t){var i=parseFloat(t);i.toString()===t&&(t=i)}this.validateType(t,r,["number"])&&this.validateRange(e,t,r,"numeric value")}},validatePayload:function(e,t){if(null!=e&&"string"!=typeof e&&(!e||"number"!=typeof e.byteLength)){if(AWS.util.isNode()){var r=AWS.util.stream.Stream;if(AWS.util.Buffer.isBuffer(e)||e instanceof r)return}else if(void 0!==("undefined"==typeof Blob?"undefined":_typeof(Blob))&&e instanceof Blob)return;var i=["Buffer","Stream","File","Blob","ArrayBuffer","DataView"];if(e)for(var a=0;a<i.length;a++){if(AWS.util.isType(e,i[a]))return;if(AWS.util.typeName(e.constructor)===i[a])return}this.fail("InvalidParameterType","Expected "+t+" to be a string, Buffer, Stream, Blob, or typed array object")}}});

},{"./core":31}],84:[function(require,module,exports){
"use strict";var util=require("../util"),AWS=require("../core");function populateHostPrefix(e){if(!e.service.config.hostPrefixEnabled)return e;var t=e.service.api.operations[e.operation];if(hasEndpointDiscover(e))return e;if(t.endpoint&&t.endpoint.hostPrefix){var r=expandHostPrefix(t.endpoint.hostPrefix,e.params,t.input);prependEndpointPrefix(e.httpRequest.endpoint,r),validateHostname(e.httpRequest.endpoint.hostname)}return e}function hasEndpointDiscover(e){var t=e.service.api,r=t.operations[e.operation],n=t.endpointOperation&&t.endpointOperation===util.string.lowerFirst(r.name);return"NULL"!==r.endpointDiscoveryRequired||!0===n}function expandHostPrefix(e,t,r){return util.each(r.members,function(r,n){if(!0===n.hostLabel){if("string"!=typeof t[r]||""===t[r])throw util.error(new Error,{message:"Parameter "+r+" should be a non-empty string.",code:"InvalidParameter"});var o=new RegExp("\\{"+r+"\\}","g");e=e.replace(o,t[r])}}),e}function prependEndpointPrefix(e,t){e.host&&(e.host=t+e.host),e.hostname&&(e.hostname=t+e.hostname)}function validateHostname(e){var t=e.split("."),r=/^[a-zA-Z0-9]{1}$|^[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9]$/;util.arrayEach(t,function(e){if(!e.length||e.length<1||e.length>63)throw util.error(new Error,{code:"ValidationError",message:"Hostname label length should be between 1 to 63 characters, inclusive."});if(!r.test(e))throw AWS.util.error(new Error,{code:"ValidationError",message:e+" is not hostname compatible."})})}module.exports={populateHostPrefix:populateHostPrefix};

},{"../core":31,"../util":119}],85:[function(require,module,exports){
"use strict";var util=require("../util"),JsonBuilder=require("../json/builder"),JsonParser=require("../json/parser"),populateHostPrefix=require("./helpers").populateHostPrefix;function buildRequest(e){var r=e.httpRequest,t=e.service.api,s=t.targetPrefix+"."+t.operations[e.operation].name,a=t.jsonVersion||"1.0",o=t.operations[e.operation].input,i=new JsonBuilder;1===a&&(a="1.0"),t.awsQueryCompatible&&(r.params||(r.params={}),Object.assign(r.params,e.params)),r.body=i.build(e.params||{},o),r.headers["Content-Type"]="application/x-amz-json-"+a,r.headers["X-Amz-Target"]=s,populateHostPrefix(e)}function extractError(e){var r={},t=e.httpResponse;if(r.code=t.headers["x-amzn-errortype"]||"UnknownError","string"==typeof r.code&&(r.code=r.code.split(":")[0]),t.body.length>0)try{var s=JSON.parse(t.body.toString()),a=s.__type||s.code||s.Code;for(var o in a&&(r.code=a.split("#").pop()),"RequestEntityTooLarge"===r.code?r.message="Request body must be less than 1 MB":r.message=s.message||s.Message||null,s||{})"code"!==o&&"message"!==o&&(r["["+o+"]"]="See error."+o+" for details.",Object.defineProperty(r,o,{value:s[o],enumerable:!1,writable:!0}))}catch(s){r.statusCode=t.statusCode,r.message=t.statusMessage}else r.statusCode=t.statusCode,r.message=t.statusCode.toString();e.error=util.error(new Error,r)}function extractData(e){var r=e.httpResponse.body.toString()||"{}";if(!1===e.request.service.config.convertResponseTypes)e.data=JSON.parse(r);else{var t=e.request.service.api.operations[e.request.operation].output||{},s=new JsonParser;e.data=s.parse(r,t)}}module.exports={buildRequest:buildRequest,extractError:extractError,extractData:extractData};

},{"../json/builder":67,"../json/parser":68,"../util":119,"./helpers":84}],86:[function(require,module,exports){
"use strict";var AWS=require("../core"),util=require("../util"),QueryParamSerializer=require("../query/query_param_serializer"),Shape=require("../model/shape"),populateHostPrefix=require("./helpers").populateHostPrefix;function buildRequest(e){var r=e.service.api.operations[e.operation],t=e.httpRequest;t.headers["Content-Type"]="application/x-www-form-urlencoded; charset=utf-8",t.params={Version:e.service.api.apiVersion,Action:r.name},(new QueryParamSerializer).serialize(e.params,r.input,function(e,r){t.params[e]=r}),t.body=util.queryParamsToString(t.params),populateHostPrefix(e)}function extractError(e){var r,t=e.httpResponse.body.toString();if(t.match("<UnknownOperationException"))r={Code:"UnknownOperation",Message:"Unknown operation "+e.request.operation};else try{r=(new AWS.XML.Parser).parse(t)}catch(t){r={Code:e.httpResponse.statusCode,Message:e.httpResponse.statusMessage}}r.requestId&&!e.requestId&&(e.requestId=r.requestId),r.Errors&&(r=r.Errors),r.Error&&(r=r.Error),r.Code?e.error=util.error(new Error,{code:r.Code,message:r.Message}):e.error=util.error(new Error,{code:e.httpResponse.statusCode,message:null})}function extractData(e){var r=e.request,t=r.service.api.operations[r.operation].output||{},a=t;if(a.resultWrapper){var s=Shape.create({type:"structure"});s.members[a.resultWrapper]=t,s.memberNames=[a.resultWrapper],util.property(t,"name",t.resultWrapper),t=s}var o=new AWS.XML.Parser;if(t&&t.members&&!t.members._XAMZRequestId){var p=Shape.create({type:"string"},{api:{protocol:"query"}},"requestId");t.members._XAMZRequestId=p}var u=o.parse(e.httpResponse.body.toString(),t);e.requestId=u._XAMZRequestId||u.requestId,u._XAMZRequestId&&delete u._XAMZRequestId,a.resultWrapper&&u[a.resultWrapper]&&(util.update(u,u[a.resultWrapper]),delete u[a.resultWrapper]),e.data=u}module.exports={buildRequest:buildRequest,extractError:extractError,extractData:extractData};

},{"../core":31,"../model/shape":81,"../query/query_param_serializer":92,"../util":119,"./helpers":84}],87:[function(require,module,exports){
"use strict";var util=require("../util"),populateHostPrefix=require("./helpers").populateHostPrefix;function populateMethod(e){e.httpRequest.method=e.service.api.operations[e.operation].httpMethod}function generateURI(e,t,a,r){var i=[e,t].join("/");i=i.replace(/\/+/g,"/");var o={},n=!1;if(util.each(a.members,function(e,t){var a=r[e];if(null!=a)if("uri"===t.location){var u=new RegExp("\\{"+t.name+"(\\+)?\\}");i=i.replace(u,function(e,t){return(t?util.uriEscapePath:util.uriEscape)(String(a))})}else"querystring"===t.location&&(n=!0,"list"===t.type?o[t.name]=a.map(function(e){return util.uriEscape(t.member.toWireFormat(e).toString())}):"map"===t.type?util.each(a,function(e,t){Array.isArray(t)?o[e]=t.map(function(e){return util.uriEscape(String(e))}):o[e]=util.uriEscape(String(t))}):o[t.name]=util.uriEscape(t.toWireFormat(a).toString()))}),n){i+=i.indexOf("?")>=0?"&":"?";var u=[];util.arrayEach(Object.keys(o).sort(),function(e){Array.isArray(o[e])||(o[e]=[o[e]]);for(var t=0;t<o[e].length;t++)u.push(util.uriEscape(String(e))+"="+o[e][t])}),i+=u.join("&")}return i}function populateURI(e){var t=e.service.api.operations[e.operation],a=t.input,r=generateURI(e.httpRequest.endpoint.path,t.httpPath,a,e.params);e.httpRequest.path=r}function populateHeaders(e){var t=e.service.api.operations[e.operation];util.each(t.input.members,function(t,a){var r=e.params[t];null!=r&&("headers"===a.location&&"map"===a.type?util.each(r,function(t,r){e.httpRequest.headers[a.name+t]=r}):"header"===a.location&&(r=a.toWireFormat(r).toString(),a.isJsonValue&&(r=util.base64.encode(r)),e.httpRequest.headers[a.name]=r))})}function buildRequest(e){populateMethod(e),populateURI(e),populateHeaders(e),populateHostPrefix(e)}function extractError(){}function extractData(e){var t=e.request,a={},r=e.httpResponse,i=t.service.api.operations[t.operation].output,o={};util.each(r.headers,function(e,t){o[e.toLowerCase()]=t}),util.each(i.members,function(e,t){var i=(t.name||e).toLowerCase();if("headers"===t.location&&"map"===t.type){a[e]={};var n=t.isLocationName?t.name:"",u=new RegExp("^"+n+"(.+)","i");util.each(r.headers,function(t,r){var i=t.match(u);null!==i&&(a[e][i[1]]=r)})}else if("header"===t.location){if(void 0!==o[i]){var p=t.isJsonValue?util.base64.decode(o[i]):o[i];a[e]=t.toType(p)}}else"statusCode"===t.location&&(a[e]=parseInt(r.statusCode,10))}),e.data=a}module.exports={buildRequest:buildRequest,extractError:extractError,extractData:extractData,generateURI:generateURI};

},{"../util":119,"./helpers":84}],88:[function(require,module,exports){
"use strict";var util=require("../util"),Rest=require("./rest"),Json=require("./json"),JsonBuilder=require("../json/builder"),JsonParser=require("../json/parser"),METHODS_WITHOUT_BODY=["GET","HEAD","DELETE"];function unsetContentLength(e){void 0===util.getRequestPayloadShape(e)&&METHODS_WITHOUT_BODY.indexOf(e.httpRequest.method)>=0&&delete e.httpRequest.headers["Content-Length"]}function populateBody(e){var t=new JsonBuilder,a=e.service.api.operations[e.operation].input;if(a.payload){var r,n=a.members[a.payload];r=e.params[a.payload],"structure"===n.type?(e.httpRequest.body=t.build(r||{},n),applyContentTypeHeader(e)):void 0!==r&&(e.httpRequest.body=r,("binary"===n.type||n.isStreaming)&&applyContentTypeHeader(e,!0))}else e.httpRequest.body=t.build(e.params,a),applyContentTypeHeader(e)}function applyContentTypeHeader(e,t){if(!e.httpRequest.headers["Content-Type"]){var a=t?"binary/octet-stream":"application/json";e.httpRequest.headers["Content-Type"]=a}}function buildRequest(e){Rest.buildRequest(e),METHODS_WITHOUT_BODY.indexOf(e.httpRequest.method)<0&&populateBody(e)}function extractError(e){Json.extractError(e)}function extractData(e){Rest.extractData(e);var t=e.request,a=t.service.api.operations[t.operation],r=t.service.api.operations[t.operation].output||{};a.hasEventOutput;if(r.payload){var n=r.members[r.payload],o=e.httpResponse.body;if(n.isEventStream)s=new JsonParser,e.data[payload]=util.createEventStream(2===AWS.HttpClient.streamsApiVersion?e.httpResponse.stream:o,s,n);else if("structure"===n.type||"list"===n.type){var s=new JsonParser;e.data[r.payload]=s.parse(o,n)}else"binary"===n.type||n.isStreaming?e.data[r.payload]=o:e.data[r.payload]=n.toType(o)}else{var p=e.data;Json.extractData(e),e.data=util.merge(p,e.data)}}module.exports={buildRequest:buildRequest,extractError:extractError,extractData:extractData,unsetContentLength:unsetContentLength};

},{"../json/builder":67,"../json/parser":68,"../util":119,"./json":85,"./rest":87}],89:[function(require,module,exports){
"use strict";var AWS=require("../core"),util=require("../util"),Rest=require("./rest");function populateBody(e){var t=e.service.api.operations[e.operation].input,r=new AWS.XML.Builder,s=e.params,a=t.payload;if(a){var o=t.members[a];if(void 0===(s=s[a]))return;if("structure"===o.type){var i=o.name;e.httpRequest.body=r.toXML(s,o,i,!0)}else e.httpRequest.body=s}else e.httpRequest.body=r.toXML(s,t,t.name||t.shape||util.string.upperFirst(e.operation)+"Request")}function buildRequest(e){Rest.buildRequest(e),["GET","HEAD"].indexOf(e.httpRequest.method)<0&&populateBody(e)}function extractError(e){var t;Rest.extractError(e);try{t=(new AWS.XML.Parser).parse(e.httpResponse.body.toString())}catch(r){t={Code:e.httpResponse.statusCode,Message:e.httpResponse.statusMessage}}t.Errors&&(t=t.Errors),t.Error&&(t=t.Error),t.Code?e.error=util.error(new Error,{code:t.Code,message:t.Message}):e.error=util.error(new Error,{code:e.httpResponse.statusCode,message:null})}function extractData(e){var t;Rest.extractData(e);var r=e.request,s=e.httpResponse.body,a=r.service.api.operations[r.operation],o=a.output,i=(a.hasEventOutput,o.payload);if(i){var p=o.members[i];p.isEventStream?(t=new AWS.XML.Parser,e.data[i]=util.createEventStream(2===AWS.HttpClient.streamsApiVersion?e.httpResponse.stream:e.httpResponse.body,t,p)):"structure"===p.type?(t=new AWS.XML.Parser,e.data[i]=t.parse(s.toString(),p)):"binary"===p.type||p.isStreaming?e.data[i]=s:e.data[i]=p.toType(s)}else if(s.length>0){var u=(t=new AWS.XML.Parser).parse(s.toString(),o);util.update(e.data,u)}}module.exports={buildRequest:buildRequest,extractError:extractError,extractData:extractData};

},{"../core":31,"../util":119,"./rest":87}],90:[function(require,module,exports){
"use strict";var AWS=require("../core");function resolveMonitoringConfig(){var e={port:void 0,clientId:void 0,enabled:void 0,host:void 0};return fromEnvironment(e)||fromConfigFile(e),toJSType(e)}function fromEnvironment(e){return e.port=e.port||process.env.AWS_CSM_PORT,e.enabled=e.enabled||process.env.AWS_CSM_ENABLED,e.clientId=e.clientId||process.env.AWS_CSM_CLIENT_ID,e.host=e.host||process.env.AWS_CSM_HOST,e.port&&e.enabled&&e.clientId&&e.host||["false","0"].indexOf(e.enabled)>=0}function fromConfigFile(e){try{var o=AWS.util.iniLoader.loadFrom({isConfig:!0,filename:process.env[AWS.util.sharedConfigFileEnv]})[process.env.AWS_PROFILE||AWS.util.defaultProfile]}catch(e){return!1}return o?(e.port=e.port||o.csm_port,e.enabled=e.enabled||o.csm_enabled,e.clientId=e.clientId||o.csm_client_id,e.host=e.host||o.csm_host,e.port&&e.enabled&&e.clientId&&e.host):e}function toJSType(e){var o=["false","0",void 0];return!e.enabled||o.indexOf(e.enabled.toLowerCase())>=0?e.enabled=!1:e.enabled=!0,e.port=e.port?parseInt(e.port,10):void 0,e}module.exports=resolveMonitoringConfig;

},{"../core":31}],91:[function(require,module,exports){
"use strict";var util=require("../core").util,dgram=require("dgram"),stringToBuffer=util.buffer.toBuffer,MAX_MESSAGE_SIZE=8192;function Publisher(t){t=t||{},this.enabled=t.enabled||!1,this.port=t.port||31e3,this.clientId=t.clientId||"",this.address=t.host||"127.0.0.1",this.clientId.length>255&&(this.clientId=this.clientId.substr(0,255)),this.messagesInFlight=0}Publisher.prototype.fieldsToTrim={UserAgent:256,SdkException:128,SdkExceptionMessage:512,AwsException:128,AwsExceptionMessage:512,FinalSdkException:128,FinalSdkExceptionMessage:512,FinalAwsException:128,FinalAwsExceptionMessage:512},Publisher.prototype.trimFields=function(t){for(var e=Object.keys(this.fieldsToTrim),i=0,s=e.length;i<s;i++){var n=e[i];if(t.hasOwnProperty(n)){var r=this.fieldsToTrim[n],l=t[n];l&&l.length>r&&(t[n]=l.substr(0,r))}}return t},Publisher.prototype.eventHandler=function(t){t.ClientId=this.clientId,this.trimFields(t);var e=stringToBuffer(JSON.stringify(t));!this.enabled||e.length>MAX_MESSAGE_SIZE||this.publishDatagram(e)},Publisher.prototype.publishDatagram=function(t){var e=this;this.getClient();this.messagesInFlight++,this.client.send(t,0,t.length,this.port,this.address,function(t,i){--e.messagesInFlight<=0&&e.destroyClient()})},Publisher.prototype.getClient=function(){return this.client||(this.client=dgram.createSocket("udp4")),this.client},Publisher.prototype.destroyClient=function(){this.client&&(this.client.close(),this.client=void 0)},module.exports={Publisher:Publisher};

},{"../core":31,"dgram":undefined}],92:[function(require,module,exports){
"use strict";var util=require("../util");function QueryParamSerializer(){}function ucfirst(e){return e.isQueryName||"ec2"!==e.api.protocol?e.name:e.name[0].toUpperCase()+e.name.substr(1)}function serializeStructure(e,r,i,a){util.each(i.members,function(i,t){var l=r[i];if(null!=l){var u=ucfirst(t);serializeMember(u=e?e+"."+u:u,l,t,a)}})}function serializeMap(e,r,i,a){var t=1;util.each(r,function(r,l){var u=(i.flattened?".":".entry.")+t+++".",n=u+(i.key.name||"key"),s=u+(i.value.name||"value");serializeMember(e+n,r,i.key,a),serializeMember(e+s,l,i.value,a)})}function serializeList(e,r,i,a){var t=i.member||{};0!==r.length?util.arrayEach(r,function(r,l){var u="."+(l+1);if("ec2"===i.api.protocol)u+="";else if(i.flattened){if(t.name){var n=e.split(".");n.pop(),n.push(ucfirst(t)),e=n.join(".")}}else u="."+(t.name?t.name:"member")+u;serializeMember(e+u,r,t,a)}):a.call(this,e,null)}function serializeMember(e,r,i,a){null!=r&&("structure"===i.type?serializeStructure(e,r,i,a):"list"===i.type?serializeList(e,r,i,a):"map"===i.type?serializeMap(e,r,i,a):a(e,i.toWireFormat(r).toString()))}QueryParamSerializer.prototype.serialize=function(e,r,i){serializeStructure("",e,r,i)},module.exports=QueryParamSerializer;

},{"../util":119}],93:[function(require,module,exports){
"use strict";module.exports={now:function(){var e=process.hrtime();return 1e3*e[0]+e[1]/1e6}};

},{}],94:[function(require,module,exports){
"use strict";function isFipsRegion(s){return"string"==typeof s&&(s.startsWith("fips-")||s.endsWith("-fips"))}function isGlobalRegion(s){return"string"==typeof s&&["aws-global","aws-us-gov-global"].includes(s)}function getRealRegion(s){return["fips-aws-global","aws-fips","aws-global"].includes(s)?"us-east-1":["fips-aws-us-gov-global","aws-us-gov-global"].includes(s)?"us-gov-west-1":s.replace(/fips-(dkr-|prod-)?|-fips/,"")}module.exports={isFipsRegion:isFipsRegion,isGlobalRegion:isGlobalRegion,getRealRegion:getRealRegion};

},{}],95:[function(require,module,exports){
"use strict";var util=require("./util"),regionConfig=require("./region_config_data.json");function generateRegionPrefix(n){if(!n)return null;var i=n.split("-");return i.length<3?null:i.slice(0,i.length-2).join("-")+"-*"}function derivedKeys(n){var i=n.config.region,e=generateRegionPrefix(i),o=n.api.endpointPrefix;return[[i,o],[e,o],[i,"*"],[e,"*"],["*",o],[i,"internal-*"],["*","*"]].map(function(n){return n[0]&&n[1]?n.join("/"):null})}function applyConfig(n,i){util.each(i,function(i,e){"globalEndpoint"!==i&&(void 0!==n.config[i]&&null!==n.config[i]||(n.config[i]=e))})}function configureEndpoint(n){for(var i=derivedKeys(n),e=n.config.useFipsEndpoint,o=n.config.useDualstackEndpoint,r=0;r<i.length;r++){var t=i[r];if(t){var g=e?o?regionConfig.dualstackFipsRules:regionConfig.fipsRules:o?regionConfig.dualstackRules:regionConfig.rules;if(Object.prototype.hasOwnProperty.call(g,t)){var a=g[t];"string"==typeof a&&(a=regionConfig.patterns[a]),n.isGlobalEndpoint=!!a.globalEndpoint,a.signingRegion&&(n.signingRegion=a.signingRegion),a.signatureVersion||(a.signatureVersion="v4");var s="bearer"===(n.api&&n.api.signatureVersion);return void applyConfig(n,Object.assign({},a,{signatureVersion:s?"bearer":a.signatureVersion}))}}}}function getEndpointSuffix(n){for(var i={"^(us|eu|ap|sa|ca|me)\\-\\w+\\-\\d+$":"amazonaws.com","^cn\\-\\w+\\-\\d+$":"amazonaws.com.cn","^us\\-gov\\-\\w+\\-\\d+$":"amazonaws.com","^us\\-iso\\-\\w+\\-\\d+$":"c2s.ic.gov","^us\\-isob\\-\\w+\\-\\d+$":"sc2s.sgov.gov"},e=Object.keys(i),o=0;o<e.length;o++){var r=RegExp(e[o]),t=i[e[o]];if(r.test(n))return t}return"amazonaws.com"}module.exports={configureEndpoint:configureEndpoint,getEndpointSuffix:getEndpointSuffix};

},{"./region_config_data.json":96,"./util":119}],96:[function(require,module,exports){
module.exports={
  "rules": {
    "*/*": {
      "endpoint": "{service}.{region}.amazonaws.com"
    },
    "cn-*/*": {
      "endpoint": "{service}.{region}.amazonaws.com.cn"
    },
    "us-iso-*/*": "usIso",
    "us-isob-*/*": "usIsob",
    "*/budgets": "globalSSL",
    "*/cloudfront": "globalSSL",
    "*/sts": "globalSSL",
    "*/importexport": {
      "endpoint": "{service}.amazonaws.com",
      "signatureVersion": "v2",
      "globalEndpoint": true
    },

    "*/route53": "globalSSL",
    "cn-*/route53": {
      "endpoint": "{service}.amazonaws.com.cn",
      "globalEndpoint": true,
      "signingRegion": "cn-northwest-1"
    },
    "us-gov-*/route53": "globalGovCloud",
    "us-iso-*/route53": {
      "endpoint": "{service}.c2s.ic.gov",
      "globalEndpoint": true,
      "signingRegion": "us-iso-east-1"
    },
    "us-isob-*/route53": {
      "endpoint": "{service}.sc2s.sgov.gov",
      "globalEndpoint": true,
      "signingRegion": "us-isob-east-1"
    },

    "*/waf": "globalSSL",

    "*/iam": "globalSSL",
    "cn-*/iam": {
      "endpoint": "{service}.cn-north-1.amazonaws.com.cn",
      "globalEndpoint": true,
      "signingRegion": "cn-north-1"
    },
    "us-iso-*/iam": {
      "endpoint": "{service}.us-iso-east-1.c2s.ic.gov",
      "globalEndpoint": true,
      "signingRegion": "us-iso-east-1"
    },

    "us-gov-*/iam": "globalGovCloud",

    "*/ce": {
      "endpoint": "{service}.us-east-1.amazonaws.com",
      "globalEndpoint": true,
      "signingRegion": "us-east-1"
    },
    "cn-*/ce": {
      "endpoint": "{service}.cn-northwest-1.amazonaws.com.cn",
      "globalEndpoint": true,
      "signingRegion": "cn-northwest-1"
    },

    "us-gov-*/sts": {
      "endpoint": "{service}.{region}.amazonaws.com"
    },
    "us-gov-west-1/s3": "s3signature",
    "us-west-1/s3": "s3signature",
    "us-west-2/s3": "s3signature",
    "eu-west-1/s3": "s3signature",
    "ap-southeast-1/s3": "s3signature",
    "ap-southeast-2/s3": "s3signature",
    "ap-northeast-1/s3": "s3signature",
    "sa-east-1/s3": "s3signature",
    "us-east-1/s3": {
      "endpoint": "{service}.amazonaws.com",
      "signatureVersion": "s3"
    },
    "us-east-1/sdb": {
      "endpoint": "{service}.amazonaws.com",
      "signatureVersion": "v2"
    },
    "*/sdb": {
      "endpoint": "{service}.{region}.amazonaws.com",
      "signatureVersion": "v2"
    },
    "*/resource-explorer-2": "dualstackByDefault",
    "*/kendra-ranking": "dualstackByDefault",
    "*/internetmonitor": "dualstackByDefault",
    "*/codecatalyst": "globalDualstackByDefault"
  },

  "fipsRules": {
    "*/*": "fipsStandard",
    "us-gov-*/*": "fipsStandard",
    "us-iso-*/*": {
      "endpoint": "{service}-fips.{region}.c2s.ic.gov"
    },
    "us-iso-*/dms": "usIso",
    "us-isob-*/*": {
      "endpoint": "{service}-fips.{region}.sc2s.sgov.gov"
    },
    "us-isob-*/dms": "usIsob",
    "cn-*/*": {
      "endpoint": "{service}-fips.{region}.amazonaws.com.cn"
    },
    "*/api.ecr": "fips.api.ecr",
    "*/api.sagemaker": "fips.api.sagemaker",
    "*/batch": "fipsDotPrefix",
    "*/eks": "fipsDotPrefix",
    "*/models.lex": "fips.models.lex",
    "*/runtime.lex": "fips.runtime.lex",
    "*/runtime.sagemaker": {
      "endpoint": "runtime-fips.sagemaker.{region}.amazonaws.com"
    },
    "*/iam": "fipsWithoutRegion",
    "*/route53": "fipsWithoutRegion",
    "*/transcribe": "fipsDotPrefix",
    "*/waf": "fipsWithoutRegion",

    "us-gov-*/transcribe": "fipsDotPrefix",
    "us-gov-*/api.ecr": "fips.api.ecr",
    "us-gov-*/api.sagemaker": "fips.api.sagemaker",
    "us-gov-*/models.lex": "fips.models.lex",
    "us-gov-*/runtime.lex": "fips.runtime.lex",
    "us-gov-*/acm-pca": "fipsWithServiceOnly",
    "us-gov-*/batch": "fipsWithServiceOnly",
    "us-gov-*/cloudformation": "fipsWithServiceOnly",
    "us-gov-*/config": "fipsWithServiceOnly",
    "us-gov-*/eks": "fipsWithServiceOnly",
    "us-gov-*/elasticmapreduce": "fipsWithServiceOnly",
    "us-gov-*/identitystore": "fipsWithServiceOnly",
    "us-gov-*/dynamodb": "fipsWithServiceOnly",
    "us-gov-*/elasticloadbalancing": "fipsWithServiceOnly",
    "us-gov-*/guardduty": "fipsWithServiceOnly",
    "us-gov-*/monitoring": "fipsWithServiceOnly",
    "us-gov-*/resource-groups": "fipsWithServiceOnly",
    "us-gov-*/runtime.sagemaker": "fipsWithServiceOnly",
    "us-gov-*/servicecatalog-appregistry": "fipsWithServiceOnly",
    "us-gov-*/servicequotas": "fipsWithServiceOnly",
    "us-gov-*/ssm": "fipsWithServiceOnly",
    "us-gov-*/sts": "fipsWithServiceOnly",
    "us-gov-*/support": "fipsWithServiceOnly",
    "us-gov-west-1/states": "fipsWithServiceOnly",
    "us-iso-east-1/elasticfilesystem": {
      "endpoint": "elasticfilesystem-fips.{region}.c2s.ic.gov"
    },
    "us-gov-west-1/organizations": "fipsWithServiceOnly",
    "us-gov-west-1/route53": {
      "endpoint": "route53.us-gov.amazonaws.com"
    },
    "*/resource-explorer-2": "fipsDualstackByDefault",
    "*/kendra-ranking": "dualstackByDefault",
    "*/internetmonitor": "dualstackByDefault",
    "*/codecatalyst": "fipsGlobalDualstackByDefault"
  },

  "dualstackRules": {
    "*/*": {
      "endpoint": "{service}.{region}.api.aws"
    },
    "cn-*/*": {
      "endpoint": "{service}.{region}.api.amazonwebservices.com.cn"
    },

    "*/s3": "dualstackLegacy",
    "cn-*/s3": "dualstackLegacyCn",
    "*/s3-control": "dualstackLegacy",
    "cn-*/s3-control": "dualstackLegacyCn",

    "ap-south-1/ec2": "dualstackLegacyEc2",
    "eu-west-1/ec2": "dualstackLegacyEc2",
    "sa-east-1/ec2": "dualstackLegacyEc2",
    "us-east-1/ec2": "dualstackLegacyEc2",
    "us-east-2/ec2": "dualstackLegacyEc2",
    "us-west-2/ec2": "dualstackLegacyEc2"
  },

  "dualstackFipsRules": {
    "*/*": {
      "endpoint": "{service}-fips.{region}.api.aws"
    },
    "cn-*/*": {
      "endpoint": "{service}-fips.{region}.api.amazonwebservices.com.cn"
    },
    "*/s3": "dualstackFipsLegacy",
    "cn-*/s3": "dualstackFipsLegacyCn",
    "*/s3-control": "dualstackFipsLegacy",
    "cn-*/s3-control": "dualstackFipsLegacyCn"
  },

  "patterns": {
    "globalSSL": {
      "endpoint": "https://{service}.amazonaws.com",
      "globalEndpoint": true,
      "signingRegion": "us-east-1"
    },
    "globalGovCloud": {
      "endpoint": "{service}.us-gov.amazonaws.com",
      "globalEndpoint": true,
      "signingRegion": "us-gov-west-1"
    },
    "s3signature": {
      "endpoint": "{service}.{region}.amazonaws.com",
      "signatureVersion": "s3"
    },
    "usIso": {
      "endpoint": "{service}.{region}.c2s.ic.gov"
    },
    "usIsob": {
      "endpoint": "{service}.{region}.sc2s.sgov.gov"
    },
    "fipsStandard": {
      "endpoint": "{service}-fips.{region}.amazonaws.com"
    },
    "fipsDotPrefix": {
      "endpoint": "fips.{service}.{region}.amazonaws.com"
    },
    "fipsWithoutRegion": {
      "endpoint": "{service}-fips.amazonaws.com"
    },
    "fips.api.ecr": {
      "endpoint": "ecr-fips.{region}.amazonaws.com"
    },
    "fips.api.sagemaker": {
      "endpoint": "api-fips.sagemaker.{region}.amazonaws.com"
    },
    "fips.models.lex": {
      "endpoint": "models-fips.lex.{region}.amazonaws.com"
    },
    "fips.runtime.lex": {
      "endpoint": "runtime-fips.lex.{region}.amazonaws.com"
    },
    "fipsWithServiceOnly": {
      "endpoint": "{service}.{region}.amazonaws.com"
    },
    "dualstackLegacy": {
      "endpoint": "{service}.dualstack.{region}.amazonaws.com"
    },
    "dualstackLegacyCn": {
      "endpoint": "{service}.dualstack.{region}.amazonaws.com.cn"
    },
    "dualstackFipsLegacy": {
      "endpoint": "{service}-fips.dualstack.{region}.amazonaws.com"
    },
    "dualstackFipsLegacyCn": {
      "endpoint": "{service}-fips.dualstack.{region}.amazonaws.com.cn"
    },
    "dualstackLegacyEc2": {
      "endpoint": "api.ec2.{region}.aws"
    },
    "dualstackByDefault": {
      "endpoint": "{service}.{region}.api.aws"
    },
    "fipsDualstackByDefault": {
      "endpoint": "{service}-fips.{region}.api.aws"
    },
    "globalDualstackByDefault": {
      "endpoint": "{service}.global.api.aws"
    },
    "fipsGlobalDualstackByDefault": {
      "endpoint": "{service}-fips.global.api.aws"
    }
  }
}

},{}],97:[function(require,module,exports){
"use strict";var AWS=require("./core"),AcceptorStateMachine=require("./state_machine"),inherit=AWS.util.inherit,domain=AWS.util.domain,jmespath=require("jmespath"),hardErrorStates={success:1,error:1,complete:1};function isTerminalState(e){return Object.prototype.hasOwnProperty.call(hardErrorStates,e._asm.currentState)}var fsm=new AcceptorStateMachine;fsm.setupStates=function(){var e=function(e,t){var r=this;r._haltHandlersOnError=!1,r.emit(r._asm.currentState,function(e){if(e)if(isTerminalState(r)){if(!(domain&&r.domain instanceof domain.Domain))throw e;e.domainEmitter=r,e.domain=r.domain,e.domainThrown=!1,r.domain.emit("error",e)}else r.response.error=e,t(e);else t(r.response.error)})};this.addState("validate","build","error",e),this.addState("build","afterBuild","restart",e),this.addState("afterBuild","sign","restart",e),this.addState("sign","send","retry",e),this.addState("retry","afterRetry","afterRetry",e),this.addState("afterRetry","sign","error",e),this.addState("send","validateResponse","retry",e),this.addState("validateResponse","extractData","extractError",e),this.addState("extractError","extractData","retry",e),this.addState("extractData","success","retry",e),this.addState("restart","build","error",e),this.addState("success","complete","complete",e),this.addState("error","complete","complete",e),this.addState("complete",null,null,e)},fsm.setupStates(),AWS.Request=inherit({constructor:function(e,t,r){var n=e.endpoint,i=e.config.region,s=e.config.customUserAgent;e.signingRegion?i=e.signingRegion:e.isGlobalEndpoint&&(i="us-east-1"),this.domain=domain&&domain.active,this.service=e,this.operation=t,this.params=r||{},this.httpRequest=new AWS.HttpRequest(n,i),this.httpRequest.appendToUserAgent(s),this.startTime=e.getSkewCorrectedDate(),this.response=new AWS.Response(this),this._asm=new AcceptorStateMachine(fsm.states,"validate"),this._haltHandlersOnError=!1,AWS.SequentialExecutor.call(this),this.emit=this.emitEvent},send:function(e){return e&&(this.httpRequest.appendToUserAgent("callback"),this.on("complete",function(t){e.call(t,t.error,t.data)})),this.runTo(),this.response},build:function(e){return this.runTo("send",e)},runTo:function(e,t){return this._asm.runTo(e,t,this),this},abort:function(){return this.removeAllListeners("validateResponse"),this.removeAllListeners("extractError"),this.on("validateResponse",function(e){e.error=AWS.util.error(new Error("Request aborted by user"),{code:"RequestAbortedError",retryable:!1})}),this.httpRequest.stream&&!this.httpRequest.stream.didCallback&&(this.httpRequest.stream.abort(),this.httpRequest._abortCallback?this.httpRequest._abortCallback():this.removeAllListeners("send")),this},eachPage:function(e){e=AWS.util.fn.makeAsync(e,3),this.on("complete",function t(r){e.call(r,r.error,r.data,function(n){!1!==n&&(r.hasNextPage()?r.nextPage().on("complete",t).send():e.call(r,null,null,AWS.util.fn.noop))})}).send()},eachItem:function(e){var t=this;this.eachPage(function(r,n){if(r)return e(r,null);if(null===n)return e(null,null);var i=t.service.paginationConfig(t.operation).resultKey;Array.isArray(i)&&(i=i[0]);var s=jmespath.search(n,i),a=!0;return AWS.util.arrayEach(s,function(t){if(!1===(a=e(null,t)))return AWS.util.abort}),a})},isPageable:function(){return!!this.service.paginationConfig(this.operation)},createReadStream:function(){var e=AWS.util.stream,t=this,r=null;return 2===AWS.HttpClient.streamsApiVersion?(r=new e.PassThrough,process.nextTick(function(){t.send()})):((r=new e.Stream).readable=!0,r.sent=!1,r.on("newListener",function(e){r.sent||"data"!==e||(r.sent=!0,process.nextTick(function(){t.send()}))})),this.on("error",function(e){r.emit("error",e)}),this.on("httpHeaders",function(n,i,s){if(n<300){t.removeListener("httpData",AWS.EventListeners.Core.HTTP_DATA),t.removeListener("httpError",AWS.EventListeners.Core.HTTP_ERROR),t.on("httpError",function(e){s.error=e,s.error.retryable=!1});var a,o=!1;if("HEAD"!==t.httpRequest.method&&(a=parseInt(i["content-length"],10)),void 0!==a&&!isNaN(a)&&a>=0){o=!0;var u=0}var h=function(){o&&u!==a?r.emit("error",AWS.util.error(new Error("Stream content length mismatch. Received "+u+" of "+a+" bytes."),{code:"StreamContentLengthMismatch"})):2===AWS.HttpClient.streamsApiVersion?r.end():r.emit("end")},c=s.httpResponse.createUnbufferedStream();if(2===AWS.HttpClient.streamsApiVersion)if(o){var l=new e.PassThrough;l._write=function(t){return t&&t.length&&(u+=t.length),e.PassThrough.prototype._write.apply(this,arguments)},l.on("end",h),r.on("error",function(e){o=!1,c.unpipe(l),l.emit("end"),l.end()}),c.pipe(l).pipe(r,{end:!1})}else c.pipe(r);else o&&c.on("data",function(e){e&&e.length&&(u+=e.length)}),c.on("data",function(e){r.emit("data",e)}),c.on("end",h);c.on("error",function(e){o=!1,r.emit("error",e)})}}),r},emitEvent:function(e,t,r){"function"==typeof t&&(r=t,t=null),r||(r=function(){}),t||(t=this.eventParameters(e,this.response)),AWS.SequentialExecutor.prototype.emit.call(this,e,t,function(e){e&&(this.response.error=e),r.call(this,e)})},eventParameters:function(e){switch(e){case"restart":case"validate":case"sign":case"build":case"afterValidate":case"afterBuild":return[this];case"error":return[this.response.error,this.response];default:return[this.response]}},presign:function(e,t){return t||"function"!=typeof e||(t=e,e=null),(new AWS.Signers.Presign).sign(this.toGet(),e,t)},isPresigned:function(){return Object.prototype.hasOwnProperty.call(this.httpRequest.headers,"presigned-expires")},toUnauthenticated:function(){return this._unAuthenticated=!0,this.removeListener("validate",AWS.EventListeners.Core.VALIDATE_CREDENTIALS),this.removeListener("sign",AWS.EventListeners.Core.SIGN),this},toGet:function(){return"query"!==this.service.api.protocol&&"ec2"!==this.service.api.protocol||(this.removeListener("build",this.buildAsGet),this.addListener("build",this.buildAsGet)),this},buildAsGet:function(e){e.httpRequest.method="GET",e.httpRequest.path=e.service.endpoint.path+"?"+e.httpRequest.body,e.httpRequest.body="",delete e.httpRequest.headers["Content-Length"],delete e.httpRequest.headers["Content-Type"]},haltHandlersOnError:function(){this._haltHandlersOnError=!0}}),AWS.Request.addPromisesToClass=function(e){this.prototype.promise=function(){var t=this;return this.httpRequest.appendToUserAgent("promise"),new e(function(e,r){t.on("complete",function(t){t.error?r(t.error):e(Object.defineProperty(t.data||{},"$response",{value:t}))}),t.runTo()})}},AWS.Request.deletePromisesFromClass=function(){delete this.prototype.promise},AWS.util.addPromises(AWS.Request),AWS.util.mixin(AWS.Request,AWS.SequentialExecutor);

},{"./core":31,"./state_machine":115,"jmespath":136}],98:[function(require,module,exports){
"use strict";var AWS=require("./core"),inherit=AWS.util.inherit,jmespath=require("jmespath");function CHECK_ACCEPTORS(e){var r=e.request._waiter,t=r.config.acceptors,a=!1,i="retry";t.forEach(function(t){if(!a){var s=r.matchers[t.matcher];s&&s(e,t.expected,t.argument)&&(a=!0,i=t.state)}}),!a&&e.error&&(i="failure"),"success"===i?r.setSuccess(e):r.setError(e,"retry"===i)}AWS.ResourceWaiter=inherit({constructor:function(e,r){this.service=e,this.state=r,this.loadWaiterConfig(this.state)},service:null,state:null,config:null,matchers:{path:function(e,r,t){try{var a=jmespath.search(e.data,t)}catch(e){return!1}return jmespath.strictDeepEqual(a,r)},pathAll:function(e,r,t){try{var a=jmespath.search(e.data,t)}catch(e){return!1}Array.isArray(a)||(a=[a]);var i=a.length;if(!i)return!1;for(var s=0;s<i;s++)if(!jmespath.strictDeepEqual(a[s],r))return!1;return!0},pathAny:function(e,r,t){try{var a=jmespath.search(e.data,t)}catch(e){return!1}Array.isArray(a)||(a=[a]);for(var i=a.length,s=0;s<i;s++)if(jmespath.strictDeepEqual(a[s],r))return!0;return!1},status:function(e,r){var t=e.httpResponse.statusCode;return"number"==typeof t&&t===r},error:function(e,r){return"string"==typeof r&&e.error?r===e.error.code:r===!!e.error}},listeners:(new AWS.SequentialExecutor).addNamedListeners(function(e){e("RETRY_CHECK","retry",function(e){var r=e.request._waiter;e.error&&"ResourceNotReady"===e.error.code&&(e.error.retryDelay=1e3*(r.config.delay||0))}),e("CHECK_OUTPUT","extractData",CHECK_ACCEPTORS),e("CHECK_ERROR","extractError",CHECK_ACCEPTORS)}),wait:function(e,r){"function"==typeof e&&(r=e,e=void 0),e&&e.$waiter&&("number"==typeof(e=AWS.util.copy(e)).$waiter.delay&&(this.config.delay=e.$waiter.delay),"number"==typeof e.$waiter.maxAttempts&&(this.config.maxAttempts=e.$waiter.maxAttempts),delete e.$waiter);var t=this.service.makeRequest(this.config.operation,e);return t._waiter=this,t.response.maxRetries=this.config.maxAttempts,t.addListeners(this.listeners),r&&t.send(r),t},setSuccess:function(e){e.error=null,e.data=e.data||{},e.request.removeAllListeners("extractData")},setError:function(e,r){e.data=null,e.error=AWS.util.error(e.error||new Error,{code:"ResourceNotReady",message:"Resource is not in the state "+this.state,retryable:r})},loadWaiterConfig:function(e){if(!this.service.api.waiters[e])throw new AWS.util.error(new Error,{code:"StateNotFoundError",message:"State "+e+" not found."});this.config=AWS.util.copy(this.service.api.waiters[e])}});

},{"./core":31,"jmespath":136}],99:[function(require,module,exports){
"use strict";var AWS=require("./core"),inherit=AWS.util.inherit,jmespath=require("jmespath");AWS.Response=inherit({constructor:function(e){this.request=e,this.data=null,this.error=null,this.retryCount=0,this.redirectCount=0,this.httpResponse=new AWS.HttpResponse,e&&(this.maxRetries=e.service.numRetries(),this.maxRedirects=e.service.config.maxRedirects)},nextPage:function(e){var t,s=this.request.service,r=this.request.operation;try{t=s.paginationConfig(r,!0)}catch(e){this.error=e}if(!this.hasNextPage()){if(e)e(this.error,null);else if(this.error)throw this.error;return null}var i=AWS.util.copy(this.request.params);if(this.nextPageTokens){var n=t.inputToken;"string"==typeof n&&(n=[n]);for(var a=0;a<n.length;a++)i[n[a]]=this.nextPageTokens[a];return s.makeRequest(this.request.operation,i,e)}return e?e(null,null):null},hasNextPage:function(){return this.cacheNextPageTokens(),!!this.nextPageTokens||void 0===this.nextPageTokens&&void 0},cacheNextPageTokens:function(){if(Object.prototype.hasOwnProperty.call(this,"nextPageTokens"))return this.nextPageTokens;this.nextPageTokens=void 0;var e=this.request.service.paginationConfig(this.request.operation);if(!e)return this.nextPageTokens;if(this.nextPageTokens=null,e.moreResults&&!jmespath.search(this.data,e.moreResults))return this.nextPageTokens;var t=e.outputToken;return"string"==typeof t&&(t=[t]),AWS.util.arrayEach.call(this,t,function(e){var t=jmespath.search(this.data,e);t&&(this.nextPageTokens=this.nextPageTokens||[],this.nextPageTokens.push(t))}),this.nextPageTokens}});

},{"./core":31,"jmespath":136}],100:[function(require,module,exports){
"use strict";var AWS=require("./core");AWS.SequentialExecutor=AWS.util.inherit({constructor:function(){this._events={}},listeners:function(t){return this._events[t]?this._events[t].slice(0):[]},on:function(t,e,n){return this._events[t]?n?this._events[t].unshift(e):this._events[t].push(e):this._events[t]=[e],this},onAsync:function(t,e,n){return e._isAsync=!0,this.on(t,e,n)},removeListener:function(t,e){var n=this._events[t];if(n){for(var r=n.length,i=-1,s=0;s<r;++s)n[s]===e&&(i=s);i>-1&&n.splice(i,1)}return this},removeAllListeners:function(t){return t?delete this._events[t]:this._events={},this},emit:function(t,e,n){n||(n=function(){});var r=this.listeners(t),i=r.length;return this.callListeners(r,e,n),i>0},callListeners:function(t,e,n,r){var i=this,s=r||null;function u(r){if(r&&(s=AWS.util.error(s||new Error,r),i._haltHandlersOnError))return n.call(i,s);i.callListeners(t,e,n,s)}for(;t.length>0;){var o=t.shift();if(o._isAsync)return void o.apply(i,e.concat([u]));try{o.apply(i,e)}catch(t){s=AWS.util.error(s||new Error,t)}if(s&&i._haltHandlersOnError)return void n.call(i,s)}n.call(i,s)},addListeners:function(t){var e=this;return t._events&&(t=t._events),AWS.util.each(t,function(t,n){"function"==typeof n&&(n=[n]),AWS.util.arrayEach(n,function(n){e.on(t,n)})}),e},addNamedListener:function(t,e,n,r){return this[t]=n,this.addListener(e,n,r),this},addNamedAsyncListener:function(t,e,n,r){return n._isAsync=!0,this.addNamedListener(t,e,n,r)},addNamedListeners:function(t){var e=this;return t(function(){e.addNamedListener.apply(e,arguments)},function(){e.addNamedAsyncListener.apply(e,arguments)}),this}}),AWS.SequentialExecutor.prototype.addListener=AWS.SequentialExecutor.prototype.on,module.exports=AWS.SequentialExecutor;

},{"./core":31}],101:[function(require,module,exports){
"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var AWS=require("./core"),Api=require("./model/api"),regionConfig=require("./region_config"),inherit=AWS.util.inherit,clientCount=0,region_utils=require("./region/utils");AWS.Service=inherit({constructor:function(e){if(!this.loadServiceClass)throw AWS.util.error(new Error,"Service must be constructed with `new' operator");if(e){if(e.region){var t=e.region;region_utils.isFipsRegion(t)&&(e.region=region_utils.getRealRegion(t),e.useFipsEndpoint=!0),region_utils.isGlobalRegion(t)&&(e.region=region_utils.getRealRegion(t))}"boolean"==typeof e.useDualstack&&"boolean"!=typeof e.useDualstackEndpoint&&(e.useDualstackEndpoint=e.useDualstack)}var i=this.loadServiceClass(e||{});if(i){var n=AWS.util.copy(e),r=new i(e);return Object.defineProperty(r,"_originalConfig",{get:function(){return n},enumerable:!1,configurable:!0}),r._clientId=++clientCount,r}this.initialize(e)},initialize:function(e){var t=AWS.config[this.serviceIdentifier];if(this.config=new AWS.Config(AWS.config),t&&this.config.update(t,!0),e&&this.config.update(e,!0),this.validateService(),this.config.endpoint||regionConfig.configureEndpoint(this),this.config.endpoint=this.endpointFromTemplate(this.config.endpoint),this.setEndpoint(this.config.endpoint),AWS.SequentialExecutor.call(this),AWS.Service.addDefaultMonitoringListeners(this),(this.config.clientSideMonitoring||AWS.Service._clientSideMonitoring)&&this.publisher){var i=this.publisher;this.addNamedListener("PUBLISH_API_CALL","apiCall",function(e){process.nextTick(function(){i.eventHandler(e)})}),this.addNamedListener("PUBLISH_API_ATTEMPT","apiCallAttempt",function(e){process.nextTick(function(){i.eventHandler(e)})})}},validateService:function(){},loadServiceClass:function(e){var t=e;if(AWS.util.isEmpty(this.api)){if(t.apiConfig)return AWS.Service.defineServiceApi(this.constructor,t.apiConfig);if(this.constructor.services){(t=new AWS.Config(AWS.config)).update(e,!0);var i=t.apiVersions[this.constructor.serviceIdentifier];return i=i||t.apiVersion,this.getLatestServiceClass(i)}return null}return null},getLatestServiceClass:function(e){return e=this.getLatestServiceVersion(e),null===this.constructor.services[e]&&AWS.Service.defineServiceApi(this.constructor,e),this.constructor.services[e]},getLatestServiceVersion:function(e){if(!this.constructor.services||0===this.constructor.services.length)throw new Error("No services defined on "+this.constructor.serviceIdentifier);if(e?AWS.util.isType(e,Date)&&(e=AWS.util.date.iso8601(e).split("T")[0]):e="latest",Object.hasOwnProperty(this.constructor.services,e))return e;for(var t=Object.keys(this.constructor.services).sort(),i=null,n=t.length-1;n>=0;n--)if("*"!==t[n][t[n].length-1]&&(i=t[n]),t[n].substr(0,10)<=e)return i;throw new Error("Could not find "+this.constructor.serviceIdentifier+" API to satisfy version constraint `"+e+"'")},api:{},defaultRetryCount:3,customizeRequests:function(e){if(e){if("function"!=typeof e)throw new Error("Invalid callback type '"+_typeof(e)+"' provided in customizeRequests");this.customRequestHandler=e}else this.customRequestHandler=null},makeRequest:function(e,t,i){if("function"==typeof t&&(i=t,t=null),t=t||{},this.config.params){var n=this.api.operations[e];n&&(t=AWS.util.copy(t),AWS.util.each(this.config.params,function(e,i){n.input.members[e]&&(void 0!==t[e]&&null!==t[e]||(t[e]=i))}))}var r=new AWS.Request(this,e,t);return this.addAllRequestListeners(r),this.attachMonitoringEmitter(r),i&&r.send(i),r},makeUnauthenticatedRequest:function(e,t,i){"function"==typeof t&&(i=t,t={});var n=this.makeRequest(e,t).toUnauthenticated();return i?n.send(i):n},waitFor:function(e,t,i){return new AWS.ResourceWaiter(this,e).wait(t,i)},addAllRequestListeners:function(e){for(var t=[AWS.events,AWS.EventListeners.Core,this.serviceInterface(),AWS.EventListeners.CorePost],i=0;i<t.length;i++)t[i]&&e.addListeners(t[i]);this.config.paramValidation||e.removeListener("validate",AWS.EventListeners.Core.VALIDATE_PARAMETERS),this.config.logger&&e.addListeners(AWS.EventListeners.Logger),this.setupRequestListeners(e),"function"==typeof this.constructor.prototype.customRequestHandler&&this.constructor.prototype.customRequestHandler(e),Object.prototype.hasOwnProperty.call(this,"customRequestHandler")&&"function"==typeof this.customRequestHandler&&this.customRequestHandler(e)},apiCallEvent:function(e){var t=e.service.api.operations[e.operation],i={Type:"ApiCall",Api:t?t.name:e.operation,Version:1,Service:e.service.api.serviceId||e.service.api.endpointPrefix,Region:e.httpRequest.region,MaxRetriesExceeded:0,UserAgent:e.httpRequest.getUserAgent()},n=e.response;if(n.httpResponse.statusCode&&(i.FinalHttpStatusCode=n.httpResponse.statusCode),n.error){var r=n.error;n.httpResponse.statusCode>299?(r.code&&(i.FinalAwsException=r.code),r.message&&(i.FinalAwsExceptionMessage=r.message)):((r.code||r.name)&&(i.FinalSdkException=r.code||r.name),r.message&&(i.FinalSdkExceptionMessage=r.message))}return i},apiAttemptEvent:function(e){var t=e.service.api.operations[e.operation],i={Type:"ApiCallAttempt",Api:t?t.name:e.operation,Version:1,Service:e.service.api.serviceId||e.service.api.endpointPrefix,Fqdn:e.httpRequest.endpoint.hostname,UserAgent:e.httpRequest.getUserAgent()},n=e.response;return n.httpResponse.statusCode&&(i.HttpStatusCode=n.httpResponse.statusCode),!e._unAuthenticated&&e.service.config.credentials&&e.service.config.credentials.accessKeyId&&(i.AccessKey=e.service.config.credentials.accessKeyId),n.httpResponse.headers?(e.httpRequest.headers["x-amz-security-token"]&&(i.SessionToken=e.httpRequest.headers["x-amz-security-token"]),n.httpResponse.headers["x-amzn-requestid"]&&(i.XAmznRequestId=n.httpResponse.headers["x-amzn-requestid"]),n.httpResponse.headers["x-amz-request-id"]&&(i.XAmzRequestId=n.httpResponse.headers["x-amz-request-id"]),n.httpResponse.headers["x-amz-id-2"]&&(i.XAmzId2=n.httpResponse.headers["x-amz-id-2"]),i):i},attemptFailEvent:function(e){var t=this.apiAttemptEvent(e),i=e.response,n=i.error;return i.httpResponse.statusCode>299?(n.code&&(t.AwsException=n.code),n.message&&(t.AwsExceptionMessage=n.message)):((n.code||n.name)&&(t.SdkException=n.code||n.name),n.message&&(t.SdkExceptionMessage=n.message)),t},attachMonitoringEmitter:function(e){var t,i,n,r,o,s,a=0,c=this;e.on("validate",function(){r=AWS.util.realClock.now(),s=Date.now()},!0),e.on("sign",function(){i=AWS.util.realClock.now(),t=Date.now(),o=e.httpRequest.region,a++},!0),e.on("validateResponse",function(){n=Math.round(AWS.util.realClock.now()-i)}),e.addNamedListener("API_CALL_ATTEMPT","success",function(){var i=c.apiAttemptEvent(e);i.Timestamp=t,i.AttemptLatency=n>=0?n:0,i.Region=o,c.emit("apiCallAttempt",[i])}),e.addNamedListener("API_CALL_ATTEMPT_RETRY","retry",function(){var r=c.attemptFailEvent(e);r.Timestamp=t,n=n||Math.round(AWS.util.realClock.now()-i),r.AttemptLatency=n>=0?n:0,r.Region=o,c.emit("apiCallAttempt",[r])}),e.addNamedListener("API_CALL","complete",function(){var t=c.apiCallEvent(e);if(t.AttemptCount=a,!(t.AttemptCount<=0)){t.Timestamp=s;var i=Math.round(AWS.util.realClock.now()-r);t.Latency=i>=0?i:0;var n=e.response;n.error&&n.error.retryable&&"number"==typeof n.retryCount&&"number"==typeof n.maxRetries&&n.retryCount>=n.maxRetries&&(t.MaxRetriesExceeded=1),c.emit("apiCall",[t])}})},setupRequestListeners:function(e){},getSigningName:function(){return this.api.signingName||this.api.endpointPrefix},getSignerClass:function(e){var t,i=null,n="";e&&(n=(i=(e.service.api.operations||{})[e.operation]||null)?i.authtype:"");return t=this.config.signatureVersion?this.config.signatureVersion:"v4"===n||"v4-unsigned-body"===n?"v4":"bearer"===n?"bearer":this.api.signatureVersion,AWS.Signers.RequestSigner.getVersion(t)},serviceInterface:function(){switch(this.api.protocol){case"ec2":case"query":return AWS.EventListeners.Query;case"json":return AWS.EventListeners.Json;case"rest-json":return AWS.EventListeners.RestJson;case"rest-xml":return AWS.EventListeners.RestXml}if(this.api.protocol)throw new Error("Invalid service `protocol' "+this.api.protocol+" in API config")},successfulResponse:function(e){return e.httpResponse.statusCode<300},numRetries:function(){return void 0!==this.config.maxRetries?this.config.maxRetries:this.defaultRetryCount},retryDelays:function(e,t){return AWS.util.calculateRetryDelay(e,this.config.retryDelayOptions,t)},retryableError:function(e){return!!this.timeoutError(e)||(!!this.networkingError(e)||(!!this.expiredCredentialsError(e)||(!!this.throttledError(e)||e.statusCode>=500)))},networkingError:function(e){return"NetworkingError"===e.code},timeoutError:function(e){return"TimeoutError"===e.code},expiredCredentialsError:function(e){return"ExpiredTokenException"===e.code},clockSkewError:function(e){switch(e.code){case"RequestTimeTooSkewed":case"RequestExpired":case"InvalidSignatureException":case"SignatureDoesNotMatch":case"AuthFailure":case"RequestInTheFuture":return!0;default:return!1}},getSkewCorrectedDate:function(){return new Date(Date.now()+this.config.systemClockOffset)},applyClockOffset:function(e){e&&(this.config.systemClockOffset=e-Date.now())},isClockSkewed:function(e){if(e)return Math.abs(this.getSkewCorrectedDate().getTime()-e)>=3e5},throttledError:function(e){if(429===e.statusCode)return!0;switch(e.code){case"ProvisionedThroughputExceededException":case"Throttling":case"ThrottlingException":case"RequestLimitExceeded":case"RequestThrottled":case"RequestThrottledException":case"TooManyRequestsException":case"TransactionInProgressException":case"EC2ThrottledException":return!0;default:return!1}},endpointFromTemplate:function(e){if("string"!=typeof e)return e;var t=e;return t=(t=(t=t.replace(/\{service\}/g,this.api.endpointPrefix)).replace(/\{region\}/g,this.config.region)).replace(/\{scheme\}/g,this.config.sslEnabled?"https":"http")},setEndpoint:function(e){this.endpoint=new AWS.Endpoint(e,this.config)},paginationConfig:function(e,t){var i=this.api.operations[e].paginator;if(!i){if(t){var n=new Error;throw AWS.util.error(n,"No pagination configuration for "+e)}return null}return i}}),AWS.util.update(AWS.Service,{defineMethods:function(e){AWS.util.each(e.prototype.api.operations,function(t){e.prototype[t]||("none"===e.prototype.api.operations[t].authtype?e.prototype[t]=function(e,i){return this.makeUnauthenticatedRequest(t,e,i)}:e.prototype[t]=function(e,i){return this.makeRequest(t,e,i)})})},defineService:function(e,t,i){AWS.Service._serviceMap[e]=!0,Array.isArray(t)||(i=t,t=[]);var n=inherit(AWS.Service,i||{});if("string"==typeof e){AWS.Service.addVersions(n,t);var r=n.serviceIdentifier||e;n.serviceIdentifier=r}else n.prototype.api=e,AWS.Service.defineMethods(n);if(AWS.SequentialExecutor.call(this.prototype),!this.prototype.publisher&&AWS.util.clientSideMonitoring){var o=AWS.util.clientSideMonitoring.Publisher,s=(0,AWS.util.clientSideMonitoring.configProvider)();this.prototype.publisher=new o(s),s.enabled&&(AWS.Service._clientSideMonitoring=!0)}return AWS.SequentialExecutor.call(n.prototype),AWS.Service.addDefaultMonitoringListeners(n.prototype),n},addVersions:function(e,t){Array.isArray(t)||(t=[t]),e.services=e.services||{};for(var i=0;i<t.length;i++)void 0===e.services[t[i]]&&(e.services[t[i]]=null);e.apiVersions=Object.keys(e.services).sort()},defineServiceApi:function(e,t,i){var n=inherit(e,{serviceIdentifier:e.serviceIdentifier});function r(t){t.isApi?n.prototype.api=t:n.prototype.api=new Api(t,{serviceIdentifier:e.serviceIdentifier})}if("string"==typeof t){if(i)r(i);else try{r(AWS.apiLoader(e.serviceIdentifier,t))}catch(i){throw AWS.util.error(i,{message:"Could not find API configuration "+e.serviceIdentifier+"-"+t})}Object.prototype.hasOwnProperty.call(e.services,t)||(e.apiVersions=e.apiVersions.concat(t).sort()),e.services[t]=n}else r(t);return AWS.Service.defineMethods(n),n},hasService:function(e){return Object.prototype.hasOwnProperty.call(AWS.Service._serviceMap,e)},addDefaultMonitoringListeners:function(e){e.addNamedListener("MONITOR_EVENTS_BUBBLE","apiCallAttempt",function(t){var i=Object.getPrototypeOf(e);i._events&&i.emit("apiCallAttempt",[t])}),e.addNamedListener("CALL_EVENTS_BUBBLE","apiCall",function(t){var i=Object.getPrototypeOf(e);i._events&&i.emit("apiCall",[t])})},_serviceMap:{}}),AWS.util.mixin(AWS.Service,AWS.SequentialExecutor),module.exports=AWS.Service;

},{"./core":31,"./model/api":76,"./region/utils":94,"./region_config":95}],102:[function(require,module,exports){
"use strict";var AWS=require("../core");require("../dynamodb/document_client"),AWS.util.update(AWS.DynamoDB.prototype,{setupRequestListeners:function(e){e.service.config.dynamoDbCrc32&&(e.removeListener("extractData",AWS.EventListeners.Json.EXTRACT_DATA),e.addListener("extractData",this.checkCrc32),e.addListener("extractData",AWS.EventListeners.Json.EXTRACT_DATA))},checkCrc32:function(e){if(!e.httpResponse.streaming&&!e.request.service.crc32IsValid(e))throw e.data=null,e.error=AWS.util.error(new Error,{code:"CRC32CheckFailed",message:"CRC32 integrity check failed",retryable:!0}),e.request.haltHandlersOnError(),e.error},crc32IsValid:function(e){var r=e.httpResponse.headers["x-amz-crc32"];return!r||parseInt(r,10)===AWS.util.crypto.crc32(e.httpResponse.body)},defaultRetryCount:10,retryDelays:function(e,r){var t=AWS.util.copy(this.config.retryDelayOptions);return"number"!=typeof t.base&&(t.base=50),AWS.util.calculateRetryDelay(e,t,r)}});

},{"../core":31,"../dynamodb/document_client":50}],103:[function(require,module,exports){
"use strict";var AWS=require("../core"),resolveRegionalEndpointsFlag=require("../config_regional_endpoint"),ENV_REGIONAL_ENDPOINT_ENABLED="AWS_STS_REGIONAL_ENDPOINTS",CONFIG_REGIONAL_ENDPOINT_ENABLED="sts_regional_endpoints";AWS.util.update(AWS.STS.prototype,{credentialsFrom:function(e,n){return e?(n||(n=new AWS.TemporaryCredentials),n.expired=!1,n.accessKeyId=e.Credentials.AccessKeyId,n.secretAccessKey=e.Credentials.SecretAccessKey,n.sessionToken=e.Credentials.SessionToken,n.expireTime=e.Credentials.Expiration,n):null},assumeRoleWithWebIdentity:function(e,n){return this.makeUnauthenticatedRequest("assumeRoleWithWebIdentity",e,n)},assumeRoleWithSAML:function(e,n){return this.makeUnauthenticatedRequest("assumeRoleWithSAML",e,n)},setupRequestListeners:function(e){e.addListener("validate",this.optInRegionalEndpoint,!0)},optInRegionalEndpoint:function(e){var n=e.service,i=n.config;if(i.stsRegionalEndpoints=resolveRegionalEndpointsFlag(n._originalConfig,{env:ENV_REGIONAL_ENDPOINT_ENABLED,sharedConfig:CONFIG_REGIONAL_ENDPOINT_ENABLED,clientConfig:"stsRegionalEndpoints"}),"regional"===i.stsRegionalEndpoints&&n.isGlobalEndpoint){if(!i.region)throw AWS.util.error(new Error,{code:"ConfigError",message:"Missing region in config"});var t=i.endpoint.indexOf(".amazonaws.com"),s=i.endpoint.substring(0,t)+"."+i.region+i.endpoint.substring(t);e.httpRequest.updateEndpoint(s),e.httpRequest.region=i.region}}});

},{"../config_regional_endpoint":30,"../core":31}],104:[function(require,module,exports){
"use strict";var IniLoader=require("./ini-loader").IniLoader;module.exports.iniLoader=new IniLoader;

},{"./ini-loader":105}],105:[function(require,module,exports){
"use strict";var AWS=require("../core"),os=require("os"),path=require("path");function parseFile(e){return AWS.util.ini.parse(AWS.util.readFileSync(e))}function getProfiles(e){var s={};return Object.keys(e).forEach(function(r){/^sso-session\s/.test(r)||Object.defineProperty(s,r.replace(/^profile\s/,""),{value:e[r],enumerable:!0})}),s}function getSsoSessions(e){var s={};return Object.keys(e).forEach(function(r){/^sso-session\s/.test(r)&&Object.defineProperty(s,r.replace(/^sso-session\s/,""),{value:e[r],enumerable:!0})}),s}AWS.IniLoader=AWS.util.inherit({constructor:function(){this.resolvedProfiles={},this.resolvedSsoSessions={}},clearCachedFiles:function(){this.resolvedProfiles={},this.resolvedSsoSessions={}},loadFrom:function(e){var s=!0===(e=e||{}).isConfig,r=e.filename||this.getDefaultFilePath(s);if(!this.resolvedProfiles[r]){var o=parseFile(r);s?Object.defineProperty(this.resolvedProfiles,r,{value:getProfiles(o)}):Object.defineProperty(this.resolvedProfiles,r,{value:o})}return this.resolvedProfiles[r]},loadSsoSessionsFrom:function(e){var s=(e=e||{}).filename||this.getDefaultFilePath(!0);if(!this.resolvedSsoSessions[s]){var r=parseFile(s);Object.defineProperty(this.resolvedSsoSessions,s,{value:getSsoSessions(r)})}return this.resolvedSsoSessions[s]},getDefaultFilePath:function(e){return path.join(this.getHomeDir(),".aws",e?"config":"credentials")},getHomeDir:function(){var e=process.env,s=e.HOME||e.USERPROFILE||(e.HOMEPATH?(e.HOMEDRIVE||"C:/")+e.HOMEPATH:null);if(s)return s;if("function"==typeof os.homedir)return os.homedir();throw AWS.util.error(new Error("Cannot load credentials, HOME path not set"))}});var IniLoader=AWS.IniLoader;module.exports={IniLoader:IniLoader};

},{"../core":31,"os":undefined,"path":undefined}],106:[function(require,module,exports){
"use strict";var AWS=require("../core");AWS.Signers.Bearer=AWS.util.inherit(AWS.Signers.RequestSigner,{constructor:function(e){AWS.Signers.RequestSigner.call(this,e)},addAuthorization:function(e){this.request.headers.Authorization="Bearer "+e.token}});

},{"../core":31}],107:[function(require,module,exports){
"use strict";var AWS=require("../core"),inherit=AWS.util.inherit,expiresHeader="presigned-expires";function signedUrlBuilder(e){var r=e.httpRequest.headers[expiresHeader],t=e.service.getSignerClass(e);if(delete e.httpRequest.headers["User-Agent"],delete e.httpRequest.headers["X-Amz-User-Agent"],t===AWS.Signers.V4){if(r>604800){throw AWS.util.error(new Error,{code:"InvalidExpiryTime",message:"Presigning does not support expiry time greater than a week with SigV4 signing.",retryable:!1})}e.httpRequest.headers[expiresHeader]=r}else{if(t!==AWS.Signers.S3)throw AWS.util.error(new Error,{message:"Presigning only supports S3 or SigV4 signing.",code:"UnsupportedSigner",retryable:!1});var i=e.service?e.service.getSkewCorrectedDate():AWS.util.date.getDate();e.httpRequest.headers[expiresHeader]=parseInt(AWS.util.date.unixTimestamp(i)+r,10).toString()}}function signedUrlSigner(e){var r=e.httpRequest.endpoint,t=AWS.util.urlParse(e.httpRequest.path),i={};t.search&&(i=AWS.util.queryStringParse(t.search.substr(1)));var s=e.httpRequest.headers.Authorization.split(" ");if("AWS"===s[0])s=s[1].split(":"),i.Signature=s.pop(),i.AWSAccessKeyId=s.join(":"),AWS.util.each(e.httpRequest.headers,function(e,r){e===expiresHeader&&(e="Expires"),0===e.indexOf("x-amz-meta-")&&(delete i[e],e=e.toLowerCase()),i[e]=r}),delete e.httpRequest.headers[expiresHeader],delete i.Authorization,delete i.Host;else if("AWS4-HMAC-SHA256"===s[0]){s.shift();var n=s.join(" ").match(/Signature=(.*?)(?:,|\s|\r?\n|$)/)[1];i["X-Amz-Signature"]=n,delete i.Expires}r.pathname=t.pathname,r.search=AWS.util.queryParamsToString(i)}AWS.Signers.Presign=inherit({sign:function(e,r,t){if(e.httpRequest.headers[expiresHeader]=r||3600,e.on("build",signedUrlBuilder),e.on("sign",signedUrlSigner),e.removeListener("afterBuild",AWS.EventListeners.Core.SET_CONTENT_LENGTH),e.removeListener("afterBuild",AWS.EventListeners.Core.COMPUTE_SHA256),e.emit("beforePresign",[e]),!t){if(e.build(),e.response.error)throw e.response.error;return AWS.util.urlFormat(e.httpRequest.endpoint)}e.build(function(){this.response.error?t(this.response.error):t(null,AWS.util.urlFormat(e.httpRequest.endpoint))})}}),module.exports=AWS.Signers.Presign;

},{"../core":31}],108:[function(require,module,exports){
"use strict";var AWS=require("../core"),inherit=AWS.util.inherit;AWS.Signers.RequestSigner=inherit({constructor:function(e){this.request=e},setServiceClientId:function(e){this.serviceClientId=e},getServiceClientId:function(){return this.serviceClientId}}),AWS.Signers.RequestSigner.getVersion=function(e){switch(e){case"v2":return AWS.Signers.V2;case"v3":return AWS.Signers.V3;case"s3v4":case"v4":return AWS.Signers.V4;case"s3":return AWS.Signers.S3;case"v3https":return AWS.Signers.V3Https;case"bearer":return AWS.Signers.Bearer}throw new Error("Unknown signing version "+e)},require("./v2"),require("./v3"),require("./v3https"),require("./v4"),require("./s3"),require("./presign"),require("./bearer");

},{"../core":31,"./bearer":106,"./presign":107,"./s3":109,"./v2":110,"./v3":111,"./v3https":112,"./v4":113}],109:[function(require,module,exports){
"use strict";var AWS=require("../core"),inherit=AWS.util.inherit;AWS.Signers.S3=inherit(AWS.Signers.RequestSigner,{subResources:{acl:1,accelerate:1,analytics:1,cors:1,lifecycle:1,delete:1,inventory:1,location:1,logging:1,metrics:1,notification:1,partNumber:1,policy:1,requestPayment:1,replication:1,restore:1,tagging:1,torrent:1,uploadId:1,uploads:1,versionId:1,versioning:1,versions:1,website:1},responseHeaders:{"response-content-type":1,"response-content-language":1,"response-expires":1,"response-cache-control":1,"response-content-disposition":1,"response-content-encoding":1},addAuthorization:function(e,s){this.request.headers["presigned-expires"]||(this.request.headers["X-Amz-Date"]=AWS.util.date.rfc822(s)),e.sessionToken&&(this.request.headers["x-amz-security-token"]=e.sessionToken);var t=this.sign(e.secretAccessKey,this.stringToSign()),n="AWS "+e.accessKeyId+":"+t;this.request.headers.Authorization=n},stringToSign:function(){var e=this.request,s=[];s.push(e.method),s.push(e.headers["Content-MD5"]||""),s.push(e.headers["Content-Type"]||""),s.push(e.headers["presigned-expires"]||"");var t=this.canonicalizedAmzHeaders();return t&&s.push(t),s.push(this.canonicalizedResource()),s.join("\n")},canonicalizedAmzHeaders:function(){var e=[];AWS.util.each(this.request.headers,function(s){s.match(/^x-amz-/i)&&e.push(s)}),e.sort(function(e,s){return e.toLowerCase()<s.toLowerCase()?-1:1});var s=[];return AWS.util.arrayEach.call(this,e,function(e){s.push(e.toLowerCase()+":"+String(this.request.headers[e]))}),s.join("\n")},canonicalizedResource:function(){var e=this.request,s=e.path.split("?"),t=s[0],n=s[1],r="";if(e.virtualHostedBucket&&(r+="/"+e.virtualHostedBucket),r+=t,n){var i=[];AWS.util.arrayEach.call(this,n.split("&"),function(e){var s=e.split("=")[0],t=e.split("=")[1];if(this.subResources[s]||this.responseHeaders[s]){var n={name:s};void 0!==t&&(this.subResources[s]?n.value=t:n.value=decodeURIComponent(t)),i.push(n)}}),i.sort(function(e,s){return e.name<s.name?-1:1}),i.length&&(n=[],AWS.util.arrayEach(i,function(e){void 0===e.value?n.push(e.name):n.push(e.name+"="+e.value)}),r+="?"+n.join("&"))}return r},sign:function(e,s){return AWS.util.crypto.hmac(e,s,"base64","sha1")}}),module.exports=AWS.Signers.S3;

},{"../core":31}],110:[function(require,module,exports){
"use strict";var AWS=require("../core"),inherit=AWS.util.inherit;AWS.Signers.V2=inherit(AWS.Signers.RequestSigner,{addAuthorization:function(e,t){t||(t=AWS.util.date.getDate());var s=this.request;s.params.Timestamp=AWS.util.date.iso8601(t),s.params.SignatureVersion="2",s.params.SignatureMethod="HmacSHA256",s.params.AWSAccessKeyId=e.accessKeyId,e.sessionToken&&(s.params.SecurityToken=e.sessionToken),delete s.params.Signature,s.params.Signature=this.signature(e),s.body=AWS.util.queryParamsToString(s.params),s.headers["Content-Length"]=s.body.length},signature:function(e){return AWS.util.crypto.hmac(e.secretAccessKey,this.stringToSign(),"base64")},stringToSign:function(){var e=[];return e.push(this.request.method),e.push(this.request.endpoint.host.toLowerCase()),e.push(this.request.pathname()),e.push(AWS.util.queryParamsToString(this.request.params)),e.join("\n")}}),module.exports=AWS.Signers.V2;

},{"../core":31}],111:[function(require,module,exports){
"use strict";var AWS=require("../core"),inherit=AWS.util.inherit;AWS.Signers.V3=inherit(AWS.Signers.RequestSigner,{addAuthorization:function(e,t){var i=AWS.util.date.rfc822(t);this.request.headers["X-Amz-Date"]=i,e.sessionToken&&(this.request.headers["x-amz-security-token"]=e.sessionToken),this.request.headers["X-Amzn-Authorization"]=this.authorization(e,i)},authorization:function(e){return"AWS3 AWSAccessKeyId="+e.accessKeyId+",Algorithm=HmacSHA256,SignedHeaders="+this.signedHeaders()+",Signature="+this.signature(e)},signedHeaders:function(){var e=[];return AWS.util.arrayEach(this.headersToSign(),function(t){e.push(t.toLowerCase())}),e.sort().join(";")},canonicalHeaders:function(){var e=this.request.headers,t=[];return AWS.util.arrayEach(this.headersToSign(),function(i){t.push(i.toLowerCase().trim()+":"+String(e[i]).trim())}),t.sort().join("\n")+"\n"},headersToSign:function(){var e=[];return AWS.util.each(this.request.headers,function(t){("Host"===t||"Content-Encoding"===t||t.match(/^X-Amz/i))&&e.push(t)}),e},signature:function(e){return AWS.util.crypto.hmac(e.secretAccessKey,this.stringToSign(),"base64")},stringToSign:function(){var e=[];return e.push(this.request.method),e.push("/"),e.push(""),e.push(this.canonicalHeaders()),e.push(this.request.body),AWS.util.crypto.sha256(e.join("\n"))}}),module.exports=AWS.Signers.V3;

},{"../core":31}],112:[function(require,module,exports){
"use strict";var AWS=require("../core"),inherit=AWS.util.inherit;require("./v3"),AWS.Signers.V3Https=inherit(AWS.Signers.V3,{authorization:function(e){return"AWS3-HTTPS AWSAccessKeyId="+e.accessKeyId+",Algorithm=HmacSHA256,Signature="+this.signature(e)},stringToSign:function(){return this.request.headers["X-Amz-Date"]}}),module.exports=AWS.Signers.V3Https;

},{"../core":31,"./v3":111}],113:[function(require,module,exports){
"use strict";var AWS=require("../core"),v4Credentials=require("./v4_credentials"),inherit=AWS.util.inherit,expiresHeader="presigned-expires";AWS.Signers.V4=inherit(AWS.Signers.RequestSigner,{constructor:function(e,t,s){AWS.Signers.RequestSigner.call(this,e),this.serviceName=t,s=s||{},this.signatureCache="boolean"!=typeof s.signatureCache||s.signatureCache,this.operation=s.operation,this.signatureVersion=s.signatureVersion},algorithm:"AWS4-HMAC-SHA256",addAuthorization:function(e,t){var s=AWS.util.date.iso8601(t).replace(/[:\-]|\.\d{3}/g,"");this.isPresigned()?this.updateForPresigned(e,s):this.addHeaders(e,s),this.request.headers.Authorization=this.authorization(e,s)},addHeaders:function(e,t){this.request.headers["X-Amz-Date"]=t,e.sessionToken&&(this.request.headers["x-amz-security-token"]=e.sessionToken)},updateForPresigned:function(e,t){var s=this.credentialString(t),i={"X-Amz-Date":t,"X-Amz-Algorithm":this.algorithm,"X-Amz-Credential":e.accessKeyId+"/"+s,"X-Amz-Expires":this.request.headers[expiresHeader],"X-Amz-SignedHeaders":this.signedHeaders()};e.sessionToken&&(i["X-Amz-Security-Token"]=e.sessionToken),this.request.headers["Content-Type"]&&(i["Content-Type"]=this.request.headers["Content-Type"]),this.request.headers["Content-MD5"]&&(i["Content-MD5"]=this.request.headers["Content-MD5"]),this.request.headers["Cache-Control"]&&(i["Cache-Control"]=this.request.headers["Cache-Control"]),AWS.util.each.call(this,this.request.headers,function(e,t){if(e!==expiresHeader&&this.isSignableHeader(e)){var s=e.toLowerCase();0===s.indexOf("x-amz-meta-")?i[s]=t:0===s.indexOf("x-amz-")&&(i[e]=t)}});var r=this.request.path.indexOf("?")>=0?"&":"?";this.request.path+=r+AWS.util.queryParamsToString(i)},authorization:function(e,t){var s=[],i=this.credentialString(t);return s.push(this.algorithm+" Credential="+e.accessKeyId+"/"+i),s.push("SignedHeaders="+this.signedHeaders()),s.push("Signature="+this.signature(e,t)),s.join(", ")},signature:function(e,t){var s=v4Credentials.getSigningKey(e,t.substr(0,8),this.request.region,this.serviceName,this.signatureCache);return AWS.util.crypto.hmac(s,this.stringToSign(t),"hex")},stringToSign:function(e){var t=[];return t.push("AWS4-HMAC-SHA256"),t.push(e),t.push(this.credentialString(e)),t.push(this.hexEncodedHash(this.canonicalString())),t.join("\n")},canonicalString:function(){var e=[],t=this.request.pathname();return"s3"!==this.serviceName&&"s3v4"!==this.signatureVersion&&(t=AWS.util.uriEscapePath(t)),e.push(this.request.method),e.push(t),e.push(this.request.search()),e.push(this.canonicalHeaders()+"\n"),e.push(this.signedHeaders()),e.push(this.hexEncodedBodyHash()),e.join("\n")},canonicalHeaders:function(){var e=[];AWS.util.each.call(this,this.request.headers,function(t,s){e.push([t,s])}),e.sort(function(e,t){return e[0].toLowerCase()<t[0].toLowerCase()?-1:1});var t=[];return AWS.util.arrayEach.call(this,e,function(e){var s=e[0].toLowerCase();if(this.isSignableHeader(s)){var i=e[1];if(null==i||"function"!=typeof i.toString)throw AWS.util.error(new Error("Header "+s+" contains invalid value"),{code:"InvalidHeader"});t.push(s+":"+this.canonicalHeaderValues(i.toString()))}}),t.join("\n")},canonicalHeaderValues:function(e){return e.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")},signedHeaders:function(){var e=[];return AWS.util.each.call(this,this.request.headers,function(t){t=t.toLowerCase(),this.isSignableHeader(t)&&e.push(t)}),e.sort().join(";")},credentialString:function(e){return v4Credentials.createScope(e.substr(0,8),this.request.region,this.serviceName)},hexEncodedHash:function(e){return AWS.util.crypto.sha256(e,"hex")},hexEncodedBodyHash:function(){var e=this.request;return this.isPresigned()&&["s3","s3-object-lambda"].indexOf(this.serviceName)>-1&&!e.body?"UNSIGNED-PAYLOAD":e.headers["X-Amz-Content-Sha256"]?e.headers["X-Amz-Content-Sha256"]:this.hexEncodedHash(this.request.body||"")},unsignableHeaders:["authorization","content-type","content-length","user-agent",expiresHeader,"expect","x-amzn-trace-id"],isSignableHeader:function(e){return 0===e.toLowerCase().indexOf("x-amz-")||this.unsignableHeaders.indexOf(e)<0},isPresigned:function(){return!!this.request.headers[expiresHeader]}}),module.exports=AWS.Signers.V4;

},{"../core":31,"./v4_credentials":114}],114:[function(require,module,exports){
"use strict";var AWS=require("../core"),cachedSecret={},cacheQueue=[],maxCacheEntries=50,v4Identifier="aws4_request";module.exports={createScope:function(e,c,t){return[e.substr(0,8),c,t,v4Identifier].join("/")},getSigningKey:function(e,c,t,r,u){var a=[AWS.util.crypto.hmac(e.secretAccessKey,e.accessKeyId,"base64"),c,t,r].join("_");if((u=!1!==u)&&a in cachedSecret)return cachedSecret[a];var i=AWS.util.crypto.hmac("AWS4"+e.secretAccessKey,c,"buffer"),h=AWS.util.crypto.hmac(i,t,"buffer"),n=AWS.util.crypto.hmac(h,r,"buffer"),s=AWS.util.crypto.hmac(n,v4Identifier,"buffer");return u&&(cachedSecret[a]=s,cacheQueue.push(a),cacheQueue.length>maxCacheEntries&&delete cachedSecret[cacheQueue.shift()]),s},emptyCache:function(){cachedSecret={},cacheQueue=[]}};

},{"../core":31}],115:[function(require,module,exports){
"use strict";function AcceptorStateMachine(t,e){this.currentState=e||null,this.states=t||{}}AcceptorStateMachine.prototype.runTo=function(t,e,n,c){"function"==typeof t&&(c=n,n=e,e=t,t=null);var r=this,a=r.states[r.currentState];a.fn.call(n||r,c,function(c){if(c){if(!a.fail)return e?e.call(n,c):null;r.currentState=a.fail}else{if(!a.accept)return e?e.call(n):null;r.currentState=a.accept}if(r.currentState===t)return e?e.call(n,c):null;r.runTo(t,e,n,c)})},AcceptorStateMachine.prototype.addState=function(t,e,n,c){return"function"==typeof e?(c=e,e=null,n=null):"function"==typeof n&&(c=n,n=null),this.currentState||(this.currentState=t),this.states[t]={accept:e,fail:n,fn:c},this},module.exports=AcceptorStateMachine;

},{}],116:[function(require,module,exports){
"use strict";var AWS=require("./core");AWS.Token=AWS.util.inherit({constructor:function(e){if(AWS.util.hideProperties(this,["token"]),this.expired=!1,this.expireTime=null,this.refreshCallbacks=[],1===arguments.length){e=arguments[0];this.token=e.token,this.expireTime=e.expireTime}},expiryWindow:15,needsRefresh:function(){var e=AWS.util.date.getDate().getTime(),i=new Date(e+1e3*this.expiryWindow);return!!(this.expireTime&&i>this.expireTime)||(this.expired||!this.token)},get:function(e){var i=this;this.needsRefresh()?this.refresh(function(t){t||(i.expired=!1),e&&e(t)}):e&&e()},refresh:function(e){this.expired=!1,e()},coalesceRefresh:function(e,i){var t=this;1===t.refreshCallbacks.push(e)&&t.load(function(e){AWS.util.arrayEach(t.refreshCallbacks,function(t){i?t(e):AWS.util.defer(function(){t(e)})}),t.refreshCallbacks.length=0})},load:function(e){e()}}),AWS.Token.addPromisesToClass=function(e){this.prototype.getPromise=AWS.util.promisifyMethod("get",e),this.prototype.refreshPromise=AWS.util.promisifyMethod("refresh",e)},AWS.Token.deletePromisesFromClass=function(){delete this.prototype.getPromise,delete this.prototype.refreshPromise},AWS.util.addPromises(AWS.Token);

},{"./core":31}],117:[function(require,module,exports){
"use strict";var AWS=require("../core"),crypto=require("crypto"),fs=require("fs"),path=require("path"),iniLoader=AWS.util.iniLoader,lastRefreshAttemptTime=0,validateTokenKey=function(e,r){if(!e[r])throw AWS.util.error(new Error('Key "'+r+'" not present in SSO Token'),{code:"SSOTokenProviderFailure"})},refreshUnsuccessful=function(e,r,i){if(!(r>e))throw AWS.util.error(new Error('SSO Token refresh failed. Please log in using "aws sso login"'),{code:"SSOTokenProviderFailure"});i(null)};AWS.SSOTokenProvider=AWS.util.inherit(AWS.Token,{expiryWindow:300,constructor:function(e){AWS.Token.call(this),e=e||{},this.expired=!0,this.profile=e.profile||process.env.AWS_PROFILE||AWS.util.defaultProfile,this.get(e.callback||AWS.util.fn.noop)},load:function(e){var r=this,i=iniLoader.loadFrom({isConfig:!0})[this.profile]||{};if(0===Object.keys(i).length)throw AWS.util.error(new Error('Profile "'+this.profile+'" not found'),{code:"SSOTokenProviderFailure"});if(!i.sso_session)throw AWS.util.error(new Error('Profile "'+this.profile+'" is missing required property "sso_session".'),{code:"SSOTokenProviderFailure"});var o=i.sso_session,s=iniLoader.loadSsoSessionsFrom()[o];if(!s)throw AWS.util.error(new Error('Sso session "'+o+'" not found'),{code:"SSOTokenProviderFailure"});if(!s.sso_start_url)throw AWS.util.error(new Error('Sso session "'+this.profile+'" is missing required property "sso_start_url".'),{code:"SSOTokenProviderFailure"});if(!s.sso_region)throw AWS.util.error(new Error('Sso session "'+this.profile+'" is missing required property "sso_region".'),{code:"SSOTokenProviderFailure"});var n=crypto.createHash("sha1").update(o).digest("hex")+".json",t=path.join(iniLoader.getHomeDir(),".aws","sso","cache",n),l=JSON.parse(fs.readFileSync(t));if(!l)throw AWS.util.error(new Error('Cached token not found. Please log in using "aws sso login" for profile "'+this.profile+'".'),{code:"SSOTokenProviderFailure"});validateTokenKey(l,"accessToken"),validateTokenKey(l,"expiresAt");var a=AWS.util.date.getDate().getTime(),c=new Date(a+1e3*this.expiryWindow),f=new Date(l.expiresAt);if(f>c)return r.token=l.accessToken,r.expireTime=f,r.expired=!1,void e(null);if(a-lastRefreshAttemptTime<3e4)refreshUnsuccessful(a,f,e);else{validateTokenKey(l,"clientId"),validateTokenKey(l,"clientSecret"),validateTokenKey(l,"refreshToken"),r.service&&r.service.config.region===s.sso_region||(r.service=new AWS.SSOOIDC({region:s.sso_region}));var u={clientId:l.clientId,clientSecret:l.clientSecret,refreshToken:l.refreshToken,grantType:"refresh_token"};lastRefreshAttemptTime=AWS.util.date.getDate().getTime(),r.service.createToken(u,function(i,o){if(i||!o)refreshUnsuccessful(a,f,e);else try{validateTokenKey(o,"accessToken"),validateTokenKey(o,"expiresIn"),r.expired=!1,r.token=o.accessToken,r.expireTime=new Date(Date.now()+1e3*o.expiresIn),e(null);try{l.accessToken=o.accessToken,l.expiresAt=r.expireTime.toISOString(),l.refreshToken=o.refreshToken,fs.writeFileSync(t,JSON.stringify(l,null,2))}catch(e){}}catch(r){refreshUnsuccessful(a,f,e)}})}},refresh:function(e){iniLoader.clearCachedFiles(),this.coalesceRefresh(e||AWS.util.fn.callback)}});

},{"../core":31,"crypto":undefined,"fs":undefined,"path":undefined}],118:[function(require,module,exports){
"use strict";var AWS=require("../core");AWS.TokenProviderChain=AWS.util.inherit(AWS.Token,{constructor:function(e){this.providers=e||AWS.TokenProviderChain.defaultProviders.slice(0),this.resolveCallbacks=[]},resolve:function(e){var r=this;if(0===r.providers.length)return e(new Error("No providers")),r;if(1===r.resolveCallbacks.push(e)){var o=0,i=r.providers.slice(0);!function e(s,n){if(!s&&n||o===i.length)return AWS.util.arrayEach(r.resolveCallbacks,function(e){e(s,n)}),void(r.resolveCallbacks.length=0);var t=i[o++];(n="function"==typeof t?t.call():t).get?n.get(function(r){e(r,r?null:n)}):e(null,n)}()}return r}}),AWS.TokenProviderChain.defaultProviders=[],AWS.TokenProviderChain.addPromisesToClass=function(e){this.prototype.resolvePromise=AWS.util.promisifyMethod("resolve",e)},AWS.TokenProviderChain.deletePromisesFromClass=function(){delete this.prototype.resolvePromise},AWS.util.addPromises(AWS.TokenProviderChain);

},{"../core":31}],119:[function(require,module,exports){
"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var AWS,util={environment:"nodejs",engine:function(){if(util.isBrowser()&&"undefined"!=typeof navigator)return navigator.userAgent;var e=process.platform+"/"+process.version;return process.env.AWS_EXECUTION_ENV&&(e+=" exec-env/"+process.env.AWS_EXECUTION_ENV),e},userAgent:function(){var e=util.environment,t="aws-sdk-"+e+"/"+require("./core").VERSION;return"nodejs"===e&&(t+=" "+util.engine()),t},uriEscape:function(e){var t=encodeURIComponent(e);return t=(t=t.replace(/[^A-Za-z0-9_.~\-%]+/g,escape)).replace(/[*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})},uriEscapePath:function(e){var t=[];return util.arrayEach(e.split("/"),function(e){t.push(util.uriEscape(e))}),t.join("/")},urlParse:function(e){return util.url.parse(e)},urlFormat:function(e){return util.url.format(e)},queryStringParse:function(e){return util.querystring.parse(e)},queryParamsToString:function(e){var t=[],r=util.uriEscape,n=Object.keys(e).sort();return util.arrayEach(n,function(n){var o=e[n],i=r(n),u=i+"=";if(Array.isArray(o)){var a=[];util.arrayEach(o,function(e){a.push(r(e))}),u=i+"="+a.sort().join("&"+i+"=")}else null!=o&&(u=i+"="+r(o));t.push(u)}),t.join("&")},readFileSync:function(e){return util.isBrowser()?null:require("fs").readFileSync(e,"utf-8")},base64:{encode:function(e){if("number"==typeof e)throw util.error(new Error("Cannot base64 encode number "+e));return null==e?e:util.buffer.toBuffer(e).toString("base64")},decode:function(e){if("number"==typeof e)throw util.error(new Error("Cannot base64 decode number "+e));return null==e?e:util.buffer.toBuffer(e,"base64")}},buffer:{toBuffer:function(e,t){return"function"==typeof util.Buffer.from&&util.Buffer.from!==Uint8Array.from?util.Buffer.from(e,t):new util.Buffer(e,t)},alloc:function(e,t,r){if("number"!=typeof e)throw new Error("size passed to alloc must be a number.");if("function"==typeof util.Buffer.alloc)return util.Buffer.alloc(e,t,r);var n=new util.Buffer(e);return void 0!==t&&"function"==typeof n.fill&&n.fill(t,void 0,void 0,r),n},toStream:function(e){util.Buffer.isBuffer(e)||(e=util.buffer.toBuffer(e));var t=new util.stream.Readable,r=0;return t._read=function(n){if(r>=e.length)return t.push(null);var o=r+n;o>e.length&&(o=e.length),t.push(e.slice(r,o)),r=o},t},concat:function(e){var t,r,n=0,o=0;for(r=0;r<e.length;r++)n+=e[r].length;for(t=util.buffer.alloc(n),r=0;r<e.length;r++)e[r].copy(t,o),o+=e[r].length;return t}},string:{byteLength:function(e){if(null==e)return 0;if("string"==typeof e&&(e=util.buffer.toBuffer(e)),"number"==typeof e.byteLength)return e.byteLength;if("number"==typeof e.length)return e.length;if("number"==typeof e.size)return e.size;if("string"==typeof e.path)return require("fs").lstatSync(e.path).size;throw util.error(new Error("Cannot determine length of "+e),{object:e})},upperFirst:function(e){return e[0].toUpperCase()+e.substr(1)},lowerFirst:function(e){return e[0].toLowerCase()+e.substr(1)}},ini:{parse:function(e){var t,r={};return util.arrayEach(e.split(/\r?\n/),function(e){if("["===(e=e.split(/(^|\s)[;#]/)[0].trim())[0]&&"]"===e[e.length-1]){if("__proto__"===(t=e.substring(1,e.length-1))||"__proto__"===t.split(/\s/)[1])throw util.error(new Error("Cannot load profile name '"+t+"' from shared ini file."))}else if(t){var n=e.indexOf("="),o=e.length-1;if(-1!==n&&0!==n&&n!==o){var i=e.substring(0,n).trim(),u=e.substring(n+1).trim();r[t]=r[t]||{},r[t][i]=u}}}),r}},fn:{noop:function(){},callback:function(e){if(e)throw e},makeAsync:function(e,t){return t&&t<=e.length?e:function(){var t=Array.prototype.slice.call(arguments,0);t.pop()(e.apply(null,t))}}},date:{getDate:function(){return AWS||(AWS=require("./core")),AWS.config.systemClockOffset?new Date((new Date).getTime()+AWS.config.systemClockOffset):new Date},iso8601:function(e){return void 0===e&&(e=util.date.getDate()),e.toISOString().replace(/\.\d{3}Z$/,"Z")},rfc822:function(e){return void 0===e&&(e=util.date.getDate()),e.toUTCString()},unixTimestamp:function(e){return void 0===e&&(e=util.date.getDate()),e.getTime()/1e3},from:function(e){return"number"==typeof e?new Date(1e3*e):new Date(e)},format:function(e,t){return t||(t="iso8601"),util.date[t](util.date.from(e))},parseTimestamp:function(e){if("number"==typeof e)return new Date(1e3*e);if(e.match(/^\d+$/))return new Date(1e3*e);if(e.match(/^\d{4}/))return new Date(e);if(e.match(/^\w{3},/))return new Date(e);throw util.error(new Error("unhandled timestamp format: "+e),{code:"TimestampParserError"})}},crypto:{crc32Table:[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],crc32:function(e){var t=util.crypto.crc32Table,r=-1;"string"==typeof e&&(e=util.buffer.toBuffer(e));for(var n=0;n<e.length;n++){r=r>>>8^t[255&(r^e.readUInt8(n))]}return(-1^r)>>>0},hmac:function(e,t,r,n){return r||(r="binary"),"buffer"===r&&(r=void 0),n||(n="sha256"),"string"==typeof t&&(t=util.buffer.toBuffer(t)),util.crypto.lib.createHmac(n,e).update(t).digest(r)},md5:function(e,t,r){return util.crypto.hash("md5",e,t,r)},sha256:function(e,t,r){return util.crypto.hash("sha256",e,t,r)},hash:function(e,t,r,n){var o=util.crypto.createHash(e);r||(r="binary"),"buffer"===r&&(r=void 0),"string"==typeof t&&(t=util.buffer.toBuffer(t));var i=util.arraySliceFn(t),u=util.Buffer.isBuffer(t);if(util.isBrowser()&&"undefined"!=typeof ArrayBuffer&&t&&t.buffer instanceof ArrayBuffer&&(u=!0),n&&"object"===_typeof(t)&&"function"==typeof t.on&&!u)t.on("data",function(e){o.update(e)}),t.on("error",function(e){n(e)}),t.on("end",function(){n(null,o.digest(r))});else{if(!n||!i||u||"undefined"==typeof FileReader){util.isBrowser()&&"object"===_typeof(t)&&!u&&(t=new util.Buffer(new Uint8Array(t)));var a=o.update(t).digest(r);return n&&n(null,a),a}var f=0,s=new FileReader;s.onerror=function(){n(new Error("Failed to read data."))},s.onload=function(){var e=new util.Buffer(new Uint8Array(s.result));o.update(e),f+=e.length,s._continueReading()},s._continueReading=function(){if(f>=t.size)n(null,o.digest(r));else{var e=f+524288;e>t.size&&(e=t.size),s.readAsArrayBuffer(i.call(t,f,e))}},s._continueReading()}},toHex:function(e){for(var t=[],r=0;r<e.length;r++)t.push(("0"+e.charCodeAt(r).toString(16)).substr(-2,2));return t.join("")},createHash:function(e){return util.crypto.lib.createHash(e)}},abort:{},each:function(e,t){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r))if(t.call(this,r,e[r])===util.abort)break}},arrayEach:function(e,t){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r))if(t.call(this,e[r],parseInt(r,10))===util.abort)break}},update:function(e,t){return util.each(t,function(t,r){e[t]=r}),e},merge:function(e,t){return util.update(util.copy(e),t)},copy:function(e){if(null==e)return e;var t={};for(var r in e)t[r]=e[r];return t},isEmpty:function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0},arraySliceFn:function(e){var t=e.slice||e.webkitSlice||e.mozSlice;return"function"==typeof t?t:null},isType:function(e,t){return"function"==typeof t&&(t=util.typeName(t)),Object.prototype.toString.call(e)==="[object "+t+"]"},typeName:function(e){if(Object.prototype.hasOwnProperty.call(e,"name"))return e.name;var t=e.toString(),r=t.match(/^\s*function (.+)\(/);return r?r[1]:t},error:function(e,t){var r=null;for(var n in"string"==typeof e.message&&""!==e.message&&("string"==typeof t||t&&t.message)&&((r=util.copy(e)).message=e.message),e.message=e.message||null,"string"==typeof t?e.message=t:"object"===_typeof(t)&&null!==t&&(util.update(e,t),t.message&&(e.message=t.message),(t.code||t.name)&&(e.code=t.code||t.name),t.stack&&(e.stack=t.stack)),"function"==typeof Object.defineProperty&&(Object.defineProperty(e,"name",{writable:!0,enumerable:!1}),Object.defineProperty(e,"message",{enumerable:!0})),e.name=String(t&&t.name||e.name||e.code||"Error"),e.time=new Date,r&&(e.originalError=r),t||{})if("["===n[0]&&"]"===n[n.length-1]){if("code"===(n=n.slice(1,-1))||"message"===n)continue;e["["+n+"]"]="See error."+n+" for details.",Object.defineProperty(e,n,{value:e[n]||t&&t[n]||r&&r[n],enumerable:!1,writable:!0})}return e},inherit:function(e,t){var r=null;if(void 0===t)t=e,e=Object,r={};else{var n=function(){};n.prototype=e.prototype,r=new n}return t.constructor===Object&&(t.constructor=function(){if(e!==Object)return e.apply(this,arguments)}),t.constructor.prototype=r,util.update(t.constructor.prototype,t),t.constructor.__super__=e,t.constructor},mixin:function(){for(var e=arguments[0],t=1;t<arguments.length;t++)for(var r in arguments[t].prototype){var n=arguments[t].prototype[r];"constructor"!==r&&(e.prototype[r]=n)}return e},hideProperties:function(e,t){"function"==typeof Object.defineProperty&&util.arrayEach(t,function(t){Object.defineProperty(e,t,{enumerable:!1,writable:!0,configurable:!0})})},property:function(e,t,r,n,o){var i={configurable:!0,enumerable:void 0===n||n};"function"!=typeof r||o?(i.value=r,i.writable=!0):i.get=r,Object.defineProperty(e,t,i)},memoizedProperty:function(e,t,r,n){var o=null;util.property(e,t,function(){return null===o&&(o=r()),o},n)},hoistPayloadMember:function(e){var t=e.request,r=t.operation,n=t.service.api.operations[r],o=n.output;if(o.payload&&!n.hasEventOutput){var i=o.members[o.payload],u=e.data[o.payload];"structure"===i.type&&util.each(u,function(t,r){util.property(e.data,t,r,!1)})}},computeSha256:function(e,t){if(util.isNode()){var r=util.stream.Stream,n=require("fs");if("function"==typeof r&&e instanceof r){if("string"!=typeof e.path)return t(new Error("Non-file stream objects are not supported with SigV4"));var o={};"number"==typeof e.start&&(o.start=e.start),"number"==typeof e.end&&(o.end=e.end),e=n.createReadStream(e.path,o)}}util.crypto.sha256(e,"hex",function(e,r){e?t(e):t(null,r)})},isClockSkewed:function(e){if(e)return util.property(AWS.config,"isClockSkewed",Math.abs((new Date).getTime()-e)>=3e5,!1),AWS.config.isClockSkewed},applyClockOffset:function(e){e&&(AWS.config.systemClockOffset=e-(new Date).getTime())},extractRequestId:function(e){var t=e.httpResponse.headers["x-amz-request-id"]||e.httpResponse.headers["x-amzn-requestid"];!t&&e.data&&e.data.ResponseMetadata&&(t=e.data.ResponseMetadata.RequestId),t&&(e.requestId=t),e.error&&(e.error.requestId=t)},addPromises:function(e,t){var r=!1;void 0===t&&AWS&&AWS.config&&(t=AWS.config.getPromisesDependency()),void 0===t&&"undefined"!=typeof Promise&&(t=Promise),"function"!=typeof t&&(r=!0),Array.isArray(e)||(e=[e]);for(var n=0;n<e.length;n++){var o=e[n];r?o.deletePromisesFromClass&&o.deletePromisesFromClass():o.addPromisesToClass&&o.addPromisesToClass(t)}},promisifyMethod:function(e,t){return function(){var r=this,n=Array.prototype.slice.call(arguments);return new t(function(t,o){n.push(function(e,r){e?o(e):t(r)}),r[e].apply(r,n)})}},isDualstackAvailable:function(e){if(!e)return!1;var t=require("../apis/metadata.json");return"string"!=typeof e&&(e=e.serviceIdentifier),!("string"!=typeof e||!t.hasOwnProperty(e))&&!!t[e].dualstackAvailable},calculateRetryDelay:function(e,t,r){t||(t={});var n=t.customBackoff||null;if("function"==typeof n)return n(e,r);var o="number"==typeof t.base?t.base:100;return Math.random()*(Math.pow(2,e)*o)},handleRequestWithRetries:function(e,t,r){t||(t={});var n=AWS.HttpClient.getInstance(),o=t.httpOptions||{},i=0,u=function(e){var n=t.maxRetries||0;if(e&&"TimeoutError"===e.code&&(e.retryable=!0),e&&e.retryable&&i<n){var o=util.calculateRetryDelay(i,t.retryDelayOptions,e);if(o>=0)return i++,void setTimeout(a,o+(e.retryAfter||0))}r(e)},a=function(){var t="";n.handleRequest(e,o,function(e){e.on("data",function(e){t+=e.toString()}),e.on("end",function(){var n=e.statusCode;if(n<300)r(null,t);else{var o=1e3*parseInt(e.headers["retry-after"],10)||0,i=util.error(new Error,{statusCode:n,retryable:n>=500||429===n});o&&i.retryable&&(i.retryAfter=o),u(i)}})},u)};AWS.util.defer(a)},uuid:{v4:function(){return require("uuid").v4()}},convertPayloadToString:function(e){var t=e.request,r=t.operation,n=t.service.api.operations[r].output||{};n.payload&&e.data[n.payload]&&(e.data[n.payload]=e.data[n.payload].toString())},defer:function(e){"object"===("undefined"==typeof process?"undefined":_typeof(process))&&"function"==typeof process.nextTick?process.nextTick(e):"function"==typeof setImmediate?setImmediate(e):setTimeout(e,0)},getRequestPayloadShape:function(e){var t=e.service.api.operations;if(t){var r=(t||{})[e.operation];if(r&&r.input&&r.input.payload)return r.input.members[r.input.payload]}},getProfilesFromSharedConfig:function(e,t){var r={},n={};if(process.env[util.configOptInEnv])n=e.loadFrom({isConfig:!0,filename:process.env[util.sharedConfigFileEnv]});var o={};try{o=e.loadFrom({filename:t||process.env[util.configOptInEnv]&&process.env[util.sharedCredentialsFileEnv]})}catch(e){if(!process.env[util.configOptInEnv])throw e}for(var i=0,u=Object.keys(n);i<u.length;i++)r[u[i]]=a(r[u[i]]||{},n[u[i]]);for(i=0,u=Object.keys(o);i<u.length;i++)r[u[i]]=a(r[u[i]]||{},o[u[i]]);return r;function a(e,t){for(var r=0,n=Object.keys(t);r<n.length;r++)e[n[r]]=t[n[r]];return e}},ARN:{validate:function(e){return e&&0===e.indexOf("arn:")&&e.split(":").length>=6},parse:function(e){var t=e.split(":");return{partition:t[1],service:t[2],region:t[3],accountId:t[4],resource:t.slice(5).join(":")}},build:function(e){if(void 0===e.service||void 0===e.region||void 0===e.accountId||void 0===e.resource)throw util.error(new Error("Input ARN object is invalid"));return"arn:"+(e.partition||"aws")+":"+e.service+":"+e.region+":"+e.accountId+":"+e.resource}},defaultProfile:"default",configOptInEnv:"AWS_SDK_LOAD_CONFIG",sharedCredentialsFileEnv:"AWS_SHARED_CREDENTIALS_FILE",sharedConfigFileEnv:"AWS_CONFIG_FILE",imdsDisabledEnv:"AWS_EC2_METADATA_DISABLED"};module.exports=util;

},{"../apis/metadata.json":22,"./core":31,"fs":undefined,"uuid":141}],120:[function(require,module,exports){
"use strict";var util=require("../util"),XmlNode=require("./xml-node").XmlNode,XmlText=require("./xml-text").XmlText;function XmlBuilder(){}function serialize(e,a,i){switch(i.type){case"structure":return serializeStructure(e,a,i);case"map":return serializeMap(e,a,i);case"list":return serializeList(e,a,i);default:return serializeScalar(e,a,i)}}function serializeStructure(e,a,i){util.arrayEach(i.memberNames,function(r){var l=i.members[r];if("body"===l.location){var t=a[r],m=l.name;if(null!=t)if(l.isXmlAttribute)e.addAttribute(m,t);else if(l.flattened)serialize(e,t,l);else{var n=new XmlNode(m);e.addChildNode(n),applyNamespaces(n,l),serialize(n,t,l)}}})}function serializeMap(e,a,i){var r=i.key.name||"key",l=i.value.name||"value";util.each(a,function(a,t){var m=new XmlNode(i.flattened?i.name:"entry");e.addChildNode(m);var n=new XmlNode(r),d=new XmlNode(l);m.addChildNode(n),m.addChildNode(d),serialize(n,a,i.key),serialize(d,t,i.value)})}function serializeList(e,a,i){i.flattened?util.arrayEach(a,function(a){var r=i.member.name||i.name,l=new XmlNode(r);e.addChildNode(l),serialize(l,a,i.member)}):util.arrayEach(a,function(a){var r=i.member.name||"member",l=new XmlNode(r);e.addChildNode(l),serialize(l,a,i.member)})}function serializeScalar(e,a,i){e.addChildNode(new XmlText(i.toWireFormat(a)))}function applyNamespaces(e,a,i){var r,l="xmlns";a.xmlNamespaceUri?(r=a.xmlNamespaceUri,a.xmlNamespacePrefix&&(l+=":"+a.xmlNamespacePrefix)):i&&a.api.xmlNamespaceUri&&(r=a.api.xmlNamespaceUri),r&&e.addAttribute(l,r)}XmlBuilder.prototype.toXML=function(e,a,i,r){var l=new XmlNode(i);return applyNamespaces(l,a,!0),serialize(l,e,a),l.children.length>0||r?l.toString():""},module.exports=XmlBuilder;

},{"../util":119,"./xml-node":124,"./xml-text":125}],121:[function(require,module,exports){
"use strict";function escapeAttribute(e){return e.replace(/&/g,"&amp;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}module.exports={escapeAttribute:escapeAttribute};

},{}],122:[function(require,module,exports){
"use strict";function escapeElement(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r/g,"&#x0D;").replace(/\n/g,"&#x0A;").replace(/\u0085/g,"&#x85;").replace(/\u2028/,"&#x2028;")}module.exports={escapeElement:escapeElement};

},{}],123:[function(require,module,exports){
"use strict";var AWS=require("../core"),util=AWS.util,Shape=AWS.Model.Shape,xml2js=require("xml2js"),options={explicitCharkey:!1,trim:!1,normalize:!1,explicitRoot:!1,emptyTag:null,explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,validator:null};function NodeXmlParser(){}function parseXml(r,e){switch(e.type){case"structure":return parseStructure(r,e);case"map":return parseMap(r,e);case"list":return parseList(r,e);case void 0:case null:return parseUnknown(r);default:return parseScalar(r,e)}}function parseStructure(r,e){var a={};return null===r?a:(util.each(e.members,function(t,n){var l=n.name;if(Object.prototype.hasOwnProperty.call(r,l)&&Array.isArray(r[l])){var s=r[l];n.flattened||(s=s[0]),a[t]=parseXml(s,n)}else n.isXmlAttribute&&r.$&&Object.prototype.hasOwnProperty.call(r.$,l)?a[t]=parseScalar(r.$[l],n):"list"!==n.type||e.api.xmlNoDefaultLists||(a[t]=n.defaultValue)}),a)}function parseMap(r,e){var a={};if(null===r)return a;var t=e.key.name||"key",n=e.value.name||"value",l=e.flattened?r:r.entry;return Array.isArray(l)&&util.arrayEach(l,function(r){a[r[t][0]]=parseXml(r[n][0],e.value)}),a}function parseList(r,e){var a=[],t=e.member.name||"member";return e.flattened?util.arrayEach(r,function(r){a.push(parseXml(r,e.member))}):r&&Array.isArray(r[t])&&util.arrayEach(r[t],function(r){a.push(parseXml(r,e.member))}),a}function parseScalar(r,e){return r&&r.$&&"base64"===r.$.encoding&&(e=new Shape.create({type:r.$.encoding})),r&&r._&&(r=r._),"function"==typeof e.toType?e.toType(r):r}function parseUnknown(r){if(null==r)return"";if("string"==typeof r)return r;if(Array.isArray(r)){var e=[];for(a=0;a<r.length;a++)e.push(parseXml(r[a],{}));return e}var a,t=Object.keys(r);if(0===t.length||1===t.length&&"$"===t[0])return{};var n={};for(a=0;a<t.length;a++){var l=t[a],s=r[l];"$"!==l&&(s.length>1?n[l]=parseList(s,{member:{}}):n[l]=parseXml(s[0],{}))}return n}NodeXmlParser.prototype.parse=function(r,e){e=e||{};var a=null,t=null;if(new xml2js.Parser(options).parseString(r,function(r,e){t=r,a=e}),a){var n=parseXml(a,e);return a.ResponseMetadata&&(n.ResponseMetadata=parseXml(a.ResponseMetadata[0],{})),n}if(t)throw util.error(t,{code:"XMLParserError",retryable:!0});return parseXml({},e)},module.exports=NodeXmlParser;

},{"../core":31,"xml2js":155}],124:[function(require,module,exports){
"use strict";var escapeAttribute=require("./escape-attribute").escapeAttribute;function XmlNode(t,e){void 0===e&&(e=[]),this.name=t,this.children=e,this.attributes={}}XmlNode.prototype.addAttribute=function(t,e){return this.attributes[t]=e,this},XmlNode.prototype.addChildNode=function(t){return this.children.push(t),this},XmlNode.prototype.removeAttribute=function(t){return delete this.attributes[t],this},XmlNode.prototype.toString=function(){for(var t=Boolean(this.children.length),e="<"+this.name,i=this.attributes,r=0,o=Object.keys(i);r<o.length;r++){var n=o[r],s=i[n];null!=s&&(e+=" "+n+'="'+escapeAttribute(""+s)+'"')}return e+(t?">"+this.children.map(function(t){return t.toString()}).join("")+"</"+this.name+">":"/>")},module.exports={XmlNode:XmlNode};

},{"./escape-attribute":121}],125:[function(require,module,exports){
"use strict";var escapeElement=require("./escape-element").escapeElement;function XmlText(e){this.value=e}XmlText.prototype.toString=function(){return escapeElement(""+this.value)},module.exports={XmlText:XmlText};

},{"./escape-element":122}],126:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var LRU_1=require("./utils/LRU"),CACHE_SIZE=1e3,EndpointCache=function(){function e(e){void 0===e&&(e=CACHE_SIZE),this.maxSize=e,this.cache=new LRU_1.LRUCache(e)}return Object.defineProperty(e.prototype,"size",{get:function(){return this.cache.length},enumerable:!0,configurable:!0}),e.prototype.put=function(t,r){var n="string"!=typeof t?e.getKeyString(t):t,o=this.populateValue(r);this.cache.put(n,o)},e.prototype.get=function(t){var r="string"!=typeof t?e.getKeyString(t):t,n=Date.now(),o=this.cache.get(r);if(o){for(var i=o.length-1;i>=0;i--){o[i].Expire<n&&o.splice(i,1)}if(0===o.length)return void this.cache.remove(r)}return o},e.getKeyString=function(e){for(var t=[],r=Object.keys(e).sort(),n=0;n<r.length;n++){var o=r[n];void 0!==e[o]&&t.push(e[o])}return t.join(" ")},e.prototype.populateValue=function(e){var t=Date.now();return e.map(function(e){return{Address:e.Address||"",Expire:t+60*(e.CachePeriodInMinutes||1)*1e3}})},e.prototype.empty=function(){this.cache.empty()},e.prototype.remove=function(t){var r="string"!=typeof t?e.getKeyString(t):t;this.cache.remove(r)},e}();exports.EndpointCache=EndpointCache;

},{"./utils/LRU":127}],127:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var LinkedListNode=function(){return function(e,t){this.key=e,this.value=t}}(),LRUCache=function(){function e(e){if(this.nodeMap={},this.size=0,"number"!=typeof e||e<1)throw new Error("Cache size can only be positive number");this.sizeLimit=e}return Object.defineProperty(e.prototype,"length",{get:function(){return this.size},enumerable:!0,configurable:!0}),e.prototype.prependToList=function(e){this.headerNode?(this.headerNode.prev=e,e.next=this.headerNode):this.tailNode=e,this.headerNode=e,this.size++},e.prototype.removeFromTail=function(){if(this.tailNode){var e=this.tailNode,t=e.prev;return t&&(t.next=void 0),e.prev=void 0,this.tailNode=t,this.size--,e}},e.prototype.detachFromList=function(e){this.headerNode===e&&(this.headerNode=e.next),this.tailNode===e&&(this.tailNode=e.prev),e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),e.next=void 0,e.prev=void 0,this.size--},e.prototype.get=function(e){if(this.nodeMap[e]){var t=this.nodeMap[e];return this.detachFromList(t),this.prependToList(t),t.value}},e.prototype.remove=function(e){if(this.nodeMap[e]){var t=this.nodeMap[e];this.detachFromList(t),delete this.nodeMap[e]}},e.prototype.put=function(e,t){if(this.nodeMap[e])this.remove(e);else if(this.size===this.sizeLimit){var i=this.removeFromTail().key;delete this.nodeMap[i]}var o=new LinkedListNode(e,t);this.nodeMap[e]=o,this.prependToList(o)},e.prototype.empty=function(){for(var e=Object.keys(this.nodeMap),t=0;t<e.length;t++){var i=e[t],o=this.nodeMap[i];this.detachFromList(o),delete this.nodeMap[i]}},e}();exports.LRUCache=LRUCache;

},{}],128:[function(require,module,exports){
"use strict";module.exports=require("./src/table");

},{"./src/table":132}],129:[function(require,module,exports){
"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,_toPropertyKey(s.key),s)}}function _createClass(t,i,e){return i&&_defineProperties(t.prototype,i),e&&_defineProperties(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"===_typeof(i)?i:String(i)}function _toPrimitive(t,i){if("object"!==_typeof(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var s=e.call(t,i||"default");if("object"!==_typeof(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(t)}var _require=require("./debug"),info=_require.info,debug=_require.debug,utils=require("./utils"),Cell=function(){function t(i){_classCallCheck(this,t),this.setOptions(i),this.x=null,this.y=null}return _createClass(t,[{key:"setOptions",value:function(t){-1!==["boolean","number","string"].indexOf(_typeof(t))&&(t={content:""+t}),t=t||{},this.options=t;var i=t.content;if(-1!==["boolean","number","string"].indexOf(_typeof(i)))this.content=String(i);else{if(i)throw new Error("Content needs to be a primitive, got: "+_typeof(i));this.content=this.options.href||""}this.colSpan=t.colSpan||1,this.rowSpan=t.rowSpan||1,this.options.href&&Object.defineProperty(this,"href",{get:function(){return this.options.href}})}},{key:"mergeTableOptions",value:function(t,i){this.cells=i;var e=this.options.chars||{},s=t.chars,n=this.chars={};CHAR_NAMES.forEach(function(t){setOption(e,s,t,n)}),this.truncate=this.options.truncate||t.truncate;var r=this.options.style=this.options.style||{},o=t.style;setOption(r,o,"padding-left",this),setOption(r,o,"padding-right",this),this.head=r.head||o.head,this.border=r.border||o.border,this.fixedWidth=t.colWidths[this.x],this.lines=this.computeLines(t),this.desiredWidth=utils.strlen(this.content)+this.paddingLeft+this.paddingRight,this.desiredHeight=this.lines.length}},{key:"computeLines",value:function(t){var i=t.wordWrap||t.textWrap,e=this.options.wordWrap,s=void 0===e?i:e;if(this.fixedWidth&&s){if(this.fixedWidth-=this.paddingLeft+this.paddingRight,this.colSpan)for(var n=1;n<this.colSpan;)this.fixedWidth+=t.colWidths[this.x+n],n++;var r=t.wrapOnWordBoundary,o=void 0===r||r,h=this.options.wrapOnWordBoundary,l=void 0===h?o:h;return this.wrapLines(utils.wordWrap(this.fixedWidth,this.content,l))}return this.wrapLines(this.content.split("\n"))}},{key:"wrapLines",value:function(t){var i=this,e=utils.colorizeLines(t);return this.href?e.map(function(t){return utils.hyperlink(i.href,t)}):e}},{key:"init",value:function(t){var i=this.x,e=this.y;this.widths=t.colWidths.slice(i,i+this.colSpan),this.heights=t.rowHeights.slice(e,e+this.rowSpan),this.width=this.widths.reduce(sumPlusOne,-1),this.height=this.heights.reduce(sumPlusOne,-1),this.hAlign=this.options.hAlign||t.colAligns[i],this.vAlign=this.options.vAlign||t.rowAligns[e],this.drawRight=i+this.colSpan==t.colWidths.length}},{key:"draw",value:function(t,i){if("top"==t)return this.drawTop(this.drawRight);if("bottom"==t)return this.drawBottom(this.drawRight);var e=utils.truncate(this.content,10,this.truncate);t||info("".concat(this.y,"-").concat(this.x,": ").concat(this.rowSpan-t,"x").concat(this.colSpan," Cell ").concat(e));var s,n=Math.max(this.height-this.lines.length,0);switch(this.vAlign){case"center":s=Math.ceil(n/2);break;case"bottom":s=n;break;default:s=0}if(t<s||t>=s+this.lines.length)return this.drawEmpty(this.drawRight,i);var r=this.lines.length>this.height&&t+1>=this.height;return this.drawLine(t-s,this.drawRight,r,i)}},{key:"drawTop",value:function(t){var i=[];return this.cells?this.widths.forEach(function(t,e){i.push(this._topLeftChar(e)),i.push(utils.repeat(this.chars[0==this.y?"top":"mid"],t))},this):(i.push(this._topLeftChar(0)),i.push(utils.repeat(this.chars[0==this.y?"top":"mid"],this.width))),t&&i.push(this.chars[0==this.y?"topRight":"rightMid"]),this.wrapWithStyleColors("border",i.join(""))}},{key:"_topLeftChar",value:function(i){var e,s=this.x+i;if(0==this.y)e=0==s?"topLeft":0==i?"topMid":"top";else if(0==s)e="leftMid";else if(e=0==i?"midMid":"bottomMid",this.cells&&(this.cells[this.y-1][s]instanceof t.ColSpanCell&&(e=0==i?"topMid":"mid"),0==i)){for(var n=1;this.cells[this.y][s-n]instanceof t.ColSpanCell;)n++;this.cells[this.y][s-n]instanceof t.RowSpanCell&&(e="leftMid")}return this.chars[e]}},{key:"wrapWithStyleColors",value:function(t,i){if(!this[t]||!this[t].length)return i;try{for(var e=require("@colors/colors/safe"),s=this[t].length-1;s>=0;s--)e=e[this[t][s]];return e(i)}catch(t){return i}}},{key:"drawLine",value:function(t,i,e,s){var n=this.chars[0==this.x?"left":"middle"];if(this.x&&s&&this.cells){for(var r=this.cells[this.y+s][this.x-1];r instanceof ColSpanCell;)r=this.cells[r.y][r.x-1];r instanceof RowSpanCell||(n=this.chars.rightMid)}var o=utils.repeat(" ",this.paddingLeft),h=i?this.chars.right:"",l=utils.repeat(" ",this.paddingRight),a=this.lines[t],c=this.width-(this.paddingLeft+this.paddingRight);e&&(a+=this.truncate||"…");var u=utils.truncate(a,c,this.truncate);return u=o+(u=utils.pad(u,c," ",this.hAlign))+l,this.stylizeLine(n,u,h)}},{key:"stylizeLine",value:function(t,i,e){return t=this.wrapWithStyleColors("border",t),e=this.wrapWithStyleColors("border",e),0===this.y&&(i=this.wrapWithStyleColors("head",i)),t+i+e}},{key:"drawBottom",value:function(t){var i=this.chars[0==this.x?"bottomLeft":"bottomMid"],e=utils.repeat(this.chars.bottom,this.width),s=t?this.chars.bottomRight:"";return this.wrapWithStyleColors("border",i+e+s)}},{key:"drawEmpty",value:function(t,i){var e=this.chars[0==this.x?"left":"middle"];if(this.x&&i&&this.cells){for(var s=this.cells[this.y+i][this.x-1];s instanceof ColSpanCell;)s=this.cells[s.y][s.x-1];s instanceof RowSpanCell||(e=this.chars.rightMid)}var n=t?this.chars.right:"",r=utils.repeat(" ",this.width);return this.stylizeLine(e,r,n)}}]),t}(),ColSpanCell=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"draw",value:function(t){return"number"==typeof t&&debug("".concat(this.y,"-").concat(this.x,": 1x1 ColSpanCell")),""}},{key:"init",value:function(){}},{key:"mergeTableOptions",value:function(){}}]),t}(),RowSpanCell=function(){function t(i){_classCallCheck(this,t),this.originalCell=i}return _createClass(t,[{key:"init",value:function(t){var i=this.y,e=this.originalCell.y;this.cellOffset=i-e,this.offset=findDimension(t.rowHeights,e,this.cellOffset)}},{key:"draw",value:function(t){return"top"==t?this.originalCell.draw(this.offset,this.cellOffset):"bottom"==t?this.originalCell.draw("bottom"):(debug("".concat(this.y,"-").concat(this.x,": 1x").concat(this.colSpan," RowSpanCell for ").concat(this.originalCell.content)),this.originalCell.draw(this.offset+1+t))}},{key:"mergeTableOptions",value:function(){}}]),t}();function firstDefined(){for(var t=arguments.length,i=new Array(t),e=0;e<t;e++)i[e]=arguments[e];return i.filter(function(t){return null!=t}).shift()}function setOption(t,i,e,s){var n=e.split("-");n.length>1?(n[1]=n[1].charAt(0).toUpperCase()+n[1].substr(1),s[n=n.join("")]=firstDefined(t[n],t[e],i[n],i[e])):s[e]=firstDefined(t[e],i[e])}function findDimension(t,i,e){for(var s=t[i],n=1;n<e;n++)s+=1+t[i+n];return s}function sumPlusOne(t,i){return t+i+1}var CHAR_NAMES=["top","top-mid","top-left","top-right","bottom","bottom-mid","bottom-left","bottom-right","left","left-mid","mid","mid-mid","right","right-mid","middle"];module.exports=Cell,module.exports.ColSpanCell=ColSpanCell,module.exports.RowSpanCell=RowSpanCell;

},{"./debug":130,"./utils":133,"@colors/colors/safe":12}],130:[function(require,module,exports){
"use strict";var messages=[],level=0,debug=function(e,u){level>=u&&messages.push(e)};debug.WARN=1,debug.INFO=2,debug.DEBUG=3,debug.reset=function(){messages=[]},debug.setDebugLevel=function(e){level=e},debug.warn=function(e){return debug(e,debug.WARN)},debug.info=function(e){return debug(e,debug.INFO)},debug.debug=function(e){return debug(e,debug.DEBUG)},debug.debugMessages=function(){return messages},module.exports=debug;

},{}],131:[function(require,module,exports){
"use strict";var _require=require("./debug"),warn=_require.warn,debug=_require.debug,Cell=require("./cell"),ColSpanCell=Cell.ColSpanCell,RowSpanCell=Cell.RowSpanCell;function makeComputeWidths(r,n,o,a){return function(e,t){var i=[],f=[],c={};t.forEach(function(e){e.forEach(function(e){(e[r]||1)>1?f.push(e):i[e[o]]=Math.max(i[e[o]]||0,e[n]||0,a)})}),e.forEach(function(r,n){"number"==typeof r&&(i[n]=r)});for(var u=f.length-1;u>=0;u--){var l=f[u],p=l[r],v=l[o],h=i[v],d="number"==typeof e[v]?0:1;if("number"==typeof h)for(var s=1;s<p;s++)h+=1+i[v+s],"number"!=typeof e[v+s]&&d++;else h="desiredWidth"===n?l.desiredWidth-1:1,(!c[v]||c[v]<h)&&(c[v]=h);if(l[n]>h)for(var x=0;d>0&&l[n]>h;){if("number"!=typeof e[v+x]){var y=Math.round((l[n]-h)/d);h+=y,i[v+x]+=y,d--}x++}}Object.assign(e,i,c);for(var S=0;S<e.length;S++)e[S]=Math.max(a,e[S]||0)}}!function(){function r(r){var n={};r.forEach(function(r,o){var a=0;r.forEach(function(r){r.y=o,r.x=o?function r(n,o){return n[o]>0?r(n,o+1):o}(n,a):a;var e=r.rowSpan||1,t=r.colSpan||1;if(e>1)for(var i=0;i<t;i++)n[r.x+i]=e;a=r.x+t}),Object.keys(n).forEach(function(r){n[r]--,n[r]<1&&delete n[r]})})}function n(r){var n=0;return r.forEach(function(r){r.forEach(function(r){n=Math.max(n,r.x+(r.colSpan||1))})}),n}function o(r,n,o){for(var a,e,t,i,f,c,u,l,p,v,h=Math.min(r.length-1,o),d={x:n,y:o},s=0;s<=h;s++)for(var x=r[s],y=0;y<x.length;y++)if(a=d,e=x[y],t=void 0,i=void 0,f=void 0,c=void 0,u=void 0,l=void 0,p=void 0,v=void 0,t=a.y,i=a.y-1+(a.rowSpan||1),f=e.y,c=!(t>e.y-1+(e.rowSpan||1)||f>i),u=a.x,l=a.x-1+(a.colSpan||1),p=e.x,v=e.x-1+(e.colSpan||1),c&&!(u>v||p>l))return!0;return!1}function a(r,n,a,e){for(var t=a;t<e;t++)if(o(r,t,n))return!1;return!0}function e(r){r.forEach(function(n,o){n.forEach(function(n){for(var a=1;a<n.rowSpan;a++){var e=new RowSpanCell(n);e.x=n.x,e.y=n.y+a,e.colSpan=n.colSpan,t(e,r[o+a])}})})}function t(r,n){for(var o=0;o<n.length&&n[o].x<r.x;)o++;n.splice(o,0,r)}function i(r){var e=function(r){return r.length}(r),i=n(r);debug("Max rows: ".concat(e,"; Max cols: ").concat(i));for(var f=0;f<e;f++)for(var c=0;c<i;c++)if(!o(r,c,f)){var u={x:c,y:f,colSpan:1,rowSpan:1};for(c++;c<i&&!o(r,c,f);)u.colSpan++,c++;for(var l=f+1;l<e&&a(r,l,u.x,u.x+u.colSpan);)u.rowSpan++,l++;var p=new Cell(u);p.x=u.x,p.y=u.y,warn("Missing cell at ".concat(p.y,"-").concat(p.x,".")),t(p,r[f])}}module.exports={makeTableLayout:function(n){var o=function(r){return r.map(function(r){if(!Array.isArray(r)){var n=Object.keys(r)[0];r=r[n],Array.isArray(r)?(r=r.slice()).unshift(n):r=[n,r]}return r.map(function(r){return new Cell(r)})})}(n);return r(o),i(o),e(o),function(r){for(var n=r.length-1;n>=0;n--)for(var o=r[n],a=0;a<o.length;a++)for(var e=o[a],t=1;t<e.colSpan;t++){var i=new ColSpanCell;i.x=e.x+t,i.y=e.y,o.splice(a+1,0,i)}}(o),o},layoutTable:r,addRowSpanCells:e,maxWidth:n,fillInTable:i,computeWidths:makeComputeWidths("colSpan","desiredWidth","x",1),computeHeights:makeComputeWidths("rowSpan","desiredHeight","y",1)}}();

},{"./cell":129,"./debug":130}],132:[function(require,module,exports){
"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,_toPropertyKey(o.key),o)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var r,o=_getPrototypeOf(t);if(e){var n=_getPrototypeOf(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var e="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(r,t)})(t)}function _construct(t,e,r){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(t,e,r){var o=[null];o.push.apply(o,e);var n=new(Function.bind.apply(t,o));return r&&_setPrototypeOf(n,r.prototype),n}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _isNativeFunction(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var debug=require("./debug"),utils=require("./utils"),tableLayout=require("./layout-manager"),Table=function(t){_inherits(r,_wrapNativeSuper(Array));var e=_createSuper(r);function r(t){var o;_classCallCheck(this,r),o=e.call(this);var n=utils.mergeOptions(t);if(Object.defineProperty(_assertThisInitialized(o),"options",{value:n,enumerable:n.debug}),n.debug){switch(_typeof(n.debug)){case"boolean":debug.setDebugLevel(debug.WARN);break;case"number":debug.setDebugLevel(n.debug);break;case"string":debug.setDebugLevel(parseInt(n.debug,10));break;default:debug.setDebugLevel(debug.WARN),debug.warn("Debug option is expected to be boolean, number, or string. Received a ".concat(_typeof(n.debug)))}Object.defineProperty(_assertThisInitialized(o),"messages",{get:function(){return debug.debugMessages()}})}return o}return _createClass(r,[{key:"toString",value:function(){var t=this,e=this.options.head&&this.options.head.length;e?(t=[this.options.head],this.length&&t.push.apply(t,this)):this.options.style.head=[];var r=tableLayout.makeTableLayout(t);r.forEach(function(t){t.forEach(function(t){t.mergeTableOptions(this.options,r)},this)},this),tableLayout.computeWidths(this.options.colWidths,r),tableLayout.computeHeights(this.options.rowHeights,r),r.forEach(function(t){t.forEach(function(t){t.init(this.options)},this)},this);for(var o=[],n=0;n<r.length;n++){var i=r[n],u=this.options.rowHeights[n];(0===n||!this.options.style.compact||1==n&&e)&&doDraw(i,"top",o);for(var s=0;s<u;s++)doDraw(i,s,o);n+1==r.length&&doDraw(i,"bottom",o)}return o.join("\n")}},{key:"width",get:function(){return this.toString().split("\n")[0].length}}]),r}();function doDraw(t,e,r){var o=[];t.forEach(function(t){o.push(t.draw(e))});var n=o.join("");n.length&&r.push(n)}Table.reset=function(){return debug.reset()},module.exports=Table;

},{"./debug":130,"./layout-manager":131,"./utils":133}],133:[function(require,module,exports){
"use strict";var stringWidth=require("string-width");function codeRegex(e){return e?/\u001b\[((?:\d*;){0,5}\d*)m/g:/\u001b\[(?:\d*;){0,5}\d*m/g}function strlen(e){var t=codeRegex();return(""+e).replace(t,"").split("\n").reduce(function(e,t){return stringWidth(t)>e?stringWidth(t):e},0)}function repeat(e,t){return Array(t+1).join(e)}function pad(e,t,r,n){var d=strlen(e);if(t+1>=d){var a=t-d;switch(n){case"right":e=repeat(r,a)+e;break;case"center":var o=Math.ceil(a/2);e=repeat(r,a-o)+e+repeat(r,o);break;default:e+=repeat(r,a)}}return e}var codeCache={};function addToCodeCache(e,t,r){r="["+r+"m",codeCache[t="["+t+"m"]={set:e,to:!0},codeCache[r]={set:e,to:!1},codeCache[e]={on:t,off:r}}function updateState(e,t){var r=t[1]?parseInt(t[1].split(";")[0]):0;if(r>=30&&r<=39||r>=90&&r<=97)e.lastForegroundAdded=t[0];else if(r>=40&&r<=49||r>=100&&r<=107)e.lastBackgroundAdded=t[0];else if(0!==r){var n=codeCache[t[0]];n&&(e[n.set]=n.to)}else for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&delete e[d]}function readState(e){for(var t=codeRegex(!0),r=t.exec(e),n={};null!==r;)updateState(n,r),r=t.exec(e);return n}function unwindState(e,t){var r=e.lastBackgroundAdded,n=e.lastForegroundAdded;return delete e.lastBackgroundAdded,delete e.lastForegroundAdded,Object.keys(e).forEach(function(r){e[r]&&(t+=codeCache[r].off)}),r&&"[49m"!=r&&(t+="[49m"),n&&"[39m"!=n&&(t+="[39m"),t}function rewindState(e,t){var r=e.lastBackgroundAdded,n=e.lastForegroundAdded;return delete e.lastBackgroundAdded,delete e.lastForegroundAdded,Object.keys(e).forEach(function(r){e[r]&&(t=codeCache[r].on+t)}),r&&"[49m"!=r&&(t=r+t),n&&"[39m"!=n&&(t=n+t),t}function truncateWidth(e,t){if(e.length===strlen(e))return e.substr(0,t);for(;strlen(e)>t;)e=e.slice(0,-1);return e}function truncateWidthWithAnsi(e,t){for(var r,n=codeRegex(!0),d=e.split(codeRegex()),a=0,o=0,i="",c={};o<t;){r=n.exec(e);var s=d[a];if(a++,o+strlen(s)>t&&(s=truncateWidth(s,t-o)),i+=s,(o+=strlen(s))<t){if(!r)break;i+=r[0],updateState(c,r)}}return unwindState(c,i)}function truncate(e,t,r){return r=r||"…",strlen(e)<=t?e:truncateWidthWithAnsi(e,t-=strlen(r))+r}function defaultOptions(){return{chars:{top:"─","top-mid":"┬","top-left":"┌","top-right":"┐",bottom:"─","bottom-mid":"┴","bottom-left":"└","bottom-right":"┘",left:"│","left-mid":"├",mid:"─","mid-mid":"┼",right:"│","right-mid":"┤",middle:"│"},truncate:"…",colWidths:[],rowHeights:[],colAligns:[],rowAligns:[],style:{"padding-left":1,"padding-right":1,head:["red"],border:["grey"],compact:!1},head:[]}}function mergeOptions(e,t){e=e||{},t=t||defaultOptions();var r=Object.assign({},t,e);return r.chars=Object.assign({},t.chars,e.chars),r.style=Object.assign({},t.style,e.style),r}function wordWrap(e,t){for(var r,n=[],d=t.split(/(\s+)/g),a=[],o=0,i=0;i<d.length;i+=2){var c=d[i],s=o+strlen(c);o>0&&r&&(s+=r.length),s>e?(0!==o&&n.push(a.join("")),a=[c],o=strlen(c)):(a.push(r||"",c),o=s),r=d[i+1]}return o&&n.push(a.join("")),n}function textWrap(e,t){var r=[],n="";function d(t,d){for(n.length&&d&&(n+=d),n+=t;n.length>e;)r.push(n.slice(0,e)),n=n.slice(e)}for(var a=t.split(/(\s+)/g),o=0;o<a.length;o+=2)d(a[o],o&&a[o-1]);return n.length&&r.push(n),r}function multiLineWordWrap(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=[];t=t.split("\n");for(var d=r?wordWrap:textWrap,a=0;a<t.length;a++)n.push.apply(n,d(e,t[a]));return n}function colorizeLines(e){for(var t={},r=[],n=0;n<e.length;n++){var d=rewindState(t,e[n]);t=readState(d);var a=Object.assign({},t);r.push(unwindState(a,d))}return r}function hyperlink(e,t){var r="]",n="",d=";";return[r,"8",d,d,e||t,n,t,r,"8",d,d,n].join("")}addToCodeCache("bold",1,22),addToCodeCache("italics",3,23),addToCodeCache("underline",4,24),addToCodeCache("inverse",7,27),addToCodeCache("strikethrough",9,29),module.exports={strlen:strlen,repeat:repeat,pad:pad,truncate:truncate,mergeOptions:mergeOptions,wordWrap:multiLineWordWrap,colorizeLines:colorizeLines,hyperlink:hyperlink};

},{"string-width":138}],134:[function(require,module,exports){
"use strict";module.exports=function(){return/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g};

},{}],135:[function(require,module,exports){
"use strict";var isFullwidthCodePoint=function(t){return!Number.isNaN(t)&&(t>=4352&&(t<=4447||9001===t||9002===t||11904<=t&&t<=12871&&12351!==t||12880<=t&&t<=19903||19968<=t&&t<=42182||43360<=t&&t<=43388||44032<=t&&t<=55203||63744<=t&&t<=64255||65040<=t&&t<=65049||65072<=t&&t<=65131||65281<=t&&t<=65376||65504<=t&&t<=65510||110592<=t&&t<=110593||127488<=t&&t<=127569||131072<=t&&t<=262141))};module.exports=isFullwidthCodePoint,module.exports.default=isFullwidthCodePoint;

},{}],136:[function(require,module,exports){
"use strict";!function(e){function t(e){return null!==e&&"[object Array]"===Object.prototype.toString.call(e)}function r(e){return null!==e&&"[object Object]"===Object.prototype.toString.call(e)}function n(e,i){if(e===i)return!0;if(Object.prototype.toString.call(e)!==Object.prototype.toString.call(i))return!1;if(!0===t(e)){if(e.length!==i.length)return!1;for(var s=0;s<e.length;s++)if(!1===n(e[s],i[s]))return!1;return!0}if(!0===r(e)){var a={};for(var u in e)if(hasOwnProperty.call(e,u)){if(!1===n(e[u],i[u]))return!1;a[u]=!0}for(var o in i)if(hasOwnProperty.call(i,o)&&!0!==a[o])return!1;return!0}return!1}function i(e){if(""===e||!1===e||null===e)return!0;if(t(e)&&0===e.length)return!0;if(r(e)){for(var n in e)if(e.hasOwnProperty(n))return!1;return!0}return!1}var s;s="function"==typeof String.prototype.trimLeft?function(e){return e.trimLeft()}:function(e){return e.match(/^\s*(.*)/)[1]};var a=0,u=1,o=2,c=3,h=4,l=6,_=8,p=9,f={0:"number",1:"any",2:"string",3:"array",4:"object",5:"boolean",6:"expression",7:"null",8:"Array<number>",9:"Array<string>"},d={".":"Dot","*":"Star",",":"Comma",":":"Colon","{":"Lbrace","}":"Rbrace","]":"Rbracket","(":"Lparen",")":"Rparen","@":"Current"},v={"<":!0,">":!0,"=":!0,"!":!0},y={" ":!0,"\t":!0,"\n":!0};function g(e){return e>="0"&&e<="9"||"-"===e}function m(){}m.prototype={tokenize:function(e){var t,r,n,i,s=[];for(this._current=0;this._current<e.length;)if((i=e[this._current])>="a"&&i<="z"||i>="A"&&i<="Z"||"_"===i)t=this._current,r=this._consumeUnquotedIdentifier(e),s.push({type:"UnquotedIdentifier",value:r,start:t});else if(void 0!==d[e[this._current]])s.push({type:d[e[this._current]],value:e[this._current],start:this._current}),this._current++;else if(g(e[this._current]))n=this._consumeNumber(e),s.push(n);else if("["===e[this._current])n=this._consumeLBracket(e),s.push(n);else if('"'===e[this._current])t=this._current,r=this._consumeQuotedIdentifier(e),s.push({type:"QuotedIdentifier",value:r,start:t});else if("'"===e[this._current])t=this._current,r=this._consumeRawStringLiteral(e),s.push({type:"Literal",value:r,start:t});else if("`"===e[this._current]){t=this._current;var a=this._consumeLiteral(e);s.push({type:"Literal",value:a,start:t})}else if(void 0!==v[e[this._current]])s.push(this._consumeOperator(e));else if(void 0!==y[e[this._current]])this._current++;else if("&"===e[this._current])t=this._current,this._current++,"&"===e[this._current]?(this._current++,s.push({type:"And",value:"&&",start:t})):s.push({type:"Expref",value:"&",start:t});else{if("|"!==e[this._current]){var u=new Error("Unknown character:"+e[this._current]);throw u.name="LexerError",u}t=this._current,this._current++,"|"===e[this._current]?(this._current++,s.push({type:"Or",value:"||",start:t})):s.push({type:"Pipe",value:"|",start:t})}return s},_consumeUnquotedIdentifier:function(e){var t,r=this._current;for(this._current++;this._current<e.length&&((t=e[this._current])>="a"&&t<="z"||t>="A"&&t<="Z"||t>="0"&&t<="9"||"_"===t);)this._current++;return e.slice(r,this._current)},_consumeQuotedIdentifier:function(e){var t=this._current;this._current++;for(var r=e.length;'"'!==e[this._current]&&this._current<r;){var n=this._current;"\\"!==e[n]||"\\"!==e[n+1]&&'"'!==e[n+1]?n++:n+=2,this._current=n}return this._current++,JSON.parse(e.slice(t,this._current))},_consumeRawStringLiteral:function(e){var t=this._current;this._current++;for(var r=e.length;"'"!==e[this._current]&&this._current<r;){var n=this._current;"\\"!==e[n]||"\\"!==e[n+1]&&"'"!==e[n+1]?n++:n+=2,this._current=n}return this._current++,e.slice(t+1,this._current-1).replace("\\'","'")},_consumeNumber:function(e){var t=this._current;this._current++;for(var r=e.length;g(e[this._current])&&this._current<r;)this._current++;return{type:"Number",value:parseInt(e.slice(t,this._current)),start:t}},_consumeLBracket:function(e){var t=this._current;return this._current++,"?"===e[this._current]?(this._current++,{type:"Filter",value:"[?",start:t}):"]"===e[this._current]?(this._current++,{type:"Flatten",value:"[]",start:t}):{type:"Lbracket",value:"[",start:t}},_consumeOperator:function(e){var t=this._current,r=e[t];return this._current++,"!"===r?"="===e[this._current]?(this._current++,{type:"NE",value:"!=",start:t}):{type:"Not",value:"!",start:t}:"<"===r?"="===e[this._current]?(this._current++,{type:"LTE",value:"<=",start:t}):{type:"LT",value:"<",start:t}:">"===r?"="===e[this._current]?(this._current++,{type:"GTE",value:">=",start:t}):{type:"GT",value:">",start:t}:"="===r&&"="===e[this._current]?(this._current++,{type:"EQ",value:"==",start:t}):void 0},_consumeLiteral:function(e){this._current++;for(var t,r=this._current,n=e.length;"`"!==e[this._current]&&this._current<n;){var i=this._current;"\\"!==e[i]||"\\"!==e[i+1]&&"`"!==e[i+1]?i++:i+=2,this._current=i}var a=s(e.slice(r,this._current));return a=a.replace("\\`","`"),t=this._looksLikeJSON(a)?JSON.parse(a):JSON.parse('"'+a+'"'),this._current++,t},_looksLikeJSON:function(e){if(""===e)return!1;if('[{"'.indexOf(e[0])>=0)return!0;if(["true","false","null"].indexOf(e)>=0)return!0;if(!("-0123456789".indexOf(e[0])>=0))return!1;try{return JSON.parse(e),!0}catch(e){return!1}}};var k={};function b(){}function x(e){this.runtime=e}function E(e){this._interpreter=e,this.functionTable={abs:{_func:this._functionAbs,_signature:[{types:[a]}]},avg:{_func:this._functionAvg,_signature:[{types:[_]}]},ceil:{_func:this._functionCeil,_signature:[{types:[a]}]},contains:{_func:this._functionContains,_signature:[{types:[o,c]},{types:[u]}]},ends_with:{_func:this._functionEndsWith,_signature:[{types:[o]},{types:[o]}]},floor:{_func:this._functionFloor,_signature:[{types:[a]}]},length:{_func:this._functionLength,_signature:[{types:[o,c,h]}]},map:{_func:this._functionMap,_signature:[{types:[l]},{types:[c]}]},max:{_func:this._functionMax,_signature:[{types:[_,p]}]},merge:{_func:this._functionMerge,_signature:[{types:[h],variadic:!0}]},max_by:{_func:this._functionMaxBy,_signature:[{types:[c]},{types:[l]}]},sum:{_func:this._functionSum,_signature:[{types:[_]}]},starts_with:{_func:this._functionStartsWith,_signature:[{types:[o]},{types:[o]}]},min:{_func:this._functionMin,_signature:[{types:[_,p]}]},min_by:{_func:this._functionMinBy,_signature:[{types:[c]},{types:[l]}]},type:{_func:this._functionType,_signature:[{types:[u]}]},keys:{_func:this._functionKeys,_signature:[{types:[h]}]},values:{_func:this._functionValues,_signature:[{types:[h]}]},sort:{_func:this._functionSort,_signature:[{types:[p,_]}]},sort_by:{_func:this._functionSortBy,_signature:[{types:[c]},{types:[l]}]},join:{_func:this._functionJoin,_signature:[{types:[o]},{types:[p]}]},reverse:{_func:this._functionReverse,_signature:[{types:[o,c]}]},to_array:{_func:this._functionToArray,_signature:[{types:[u]}]},to_string:{_func:this._functionToString,_signature:[{types:[u]}]},to_number:{_func:this._functionToNumber,_signature:[{types:[u]}]},not_null:{_func:this._functionNotNull,_signature:[{types:[u],variadic:!0}]}}}k.EOF=0,k.UnquotedIdentifier=0,k.QuotedIdentifier=0,k.Rbracket=0,k.Rparen=0,k.Comma=0,k.Rbrace=0,k.Number=0,k.Current=0,k.Expref=0,k.Pipe=1,k.Or=2,k.And=3,k.EQ=5,k.GT=5,k.LT=5,k.GTE=5,k.LTE=5,k.NE=5,k.Flatten=9,k.Star=20,k.Filter=21,k.Dot=40,k.Not=45,k.Lbrace=50,k.Lbracket=55,k.Lparen=60,b.prototype={parse:function(e){this._loadTokens(e),this.index=0;var t=this.expression(0);if("EOF"!==this._lookahead(0)){var r=this._lookaheadToken(0),n=new Error("Unexpected token type: "+r.type+", value: "+r.value);throw n.name="ParserError",n}return t},_loadTokens:function(e){var t=(new m).tokenize(e);t.push({type:"EOF",value:"",start:e.length}),this.tokens=t},expression:function(e){var t=this._lookaheadToken(0);this._advance();for(var r=this.nud(t),n=this._lookahead(0);e<k[n];)this._advance(),r=this.led(n,r),n=this._lookahead(0);return r},_lookahead:function(e){return this.tokens[this.index+e].type},_lookaheadToken:function(e){return this.tokens[this.index+e]},_advance:function(){this.index++},nud:function(e){var t,r;switch(e.type){case"Literal":return{type:"Literal",value:e.value};case"UnquotedIdentifier":return{type:"Field",name:e.value};case"QuotedIdentifier":var n={type:"Field",name:e.value};if("Lparen"===this._lookahead(0))throw new Error("Quoted identifier not allowed for function names.");return n;case"Not":return{type:"NotExpression",children:[t=this.expression(k.Not)]};case"Star":return t=null,{type:"ValueProjection",children:[{type:"Identity"},t="Rbracket"===this._lookahead(0)?{type:"Identity"}:this._parseProjectionRHS(k.Star)]};case"Filter":return this.led(e.type,{type:"Identity"});case"Lbrace":return this._parseMultiselectHash();case"Flatten":return{type:"Projection",children:[{type:"Flatten",children:[{type:"Identity"}]},t=this._parseProjectionRHS(k.Flatten)]};case"Lbracket":return"Number"===this._lookahead(0)||"Colon"===this._lookahead(0)?(t=this._parseIndexExpression(),this._projectIfSlice({type:"Identity"},t)):"Star"===this._lookahead(0)&&"Rbracket"===this._lookahead(1)?(this._advance(),this._advance(),{type:"Projection",children:[{type:"Identity"},t=this._parseProjectionRHS(k.Star)]}):this._parseMultiselectList();case"Current":return{type:"Current"};case"Expref":return{type:"ExpressionReference",children:[r=this.expression(k.Expref)]};case"Lparen":for(var i=[];"Rparen"!==this._lookahead(0);)"Current"===this._lookahead(0)?(r={type:"Current"},this._advance()):r=this.expression(0),i.push(r);return this._match("Rparen"),i[0];default:this._errorToken(e)}},led:function(e,t){var r;switch(e){case"Dot":var n=k.Dot;return"Star"!==this._lookahead(0)?{type:"Subexpression",children:[t,r=this._parseDotRHS(n)]}:(this._advance(),{type:"ValueProjection",children:[t,r=this._parseProjectionRHS(n)]});case"Pipe":return{type:"Pipe",children:[t,r=this.expression(k.Pipe)]};case"Or":return{type:"OrExpression",children:[t,r=this.expression(k.Or)]};case"And":return{type:"AndExpression",children:[t,r=this.expression(k.And)]};case"Lparen":for(var i,s=t.name,a=[];"Rparen"!==this._lookahead(0);)"Current"===this._lookahead(0)?(i={type:"Current"},this._advance()):i=this.expression(0),"Comma"===this._lookahead(0)&&this._match("Comma"),a.push(i);return this._match("Rparen"),{type:"Function",name:s,children:a};case"Filter":var u=this.expression(0);return this._match("Rbracket"),{type:"FilterProjection",children:[t,r="Flatten"===this._lookahead(0)?{type:"Identity"}:this._parseProjectionRHS(k.Filter),u]};case"Flatten":return{type:"Projection",children:[{type:"Flatten",children:[t]},this._parseProjectionRHS(k.Flatten)]};case"EQ":case"NE":case"GT":case"GTE":case"LT":case"LTE":return this._parseComparator(t,e);case"Lbracket":var o=this._lookaheadToken(0);return"Number"===o.type||"Colon"===o.type?(r=this._parseIndexExpression(),this._projectIfSlice(t,r)):(this._match("Star"),this._match("Rbracket"),{type:"Projection",children:[t,r=this._parseProjectionRHS(k.Star)]});default:this._errorToken(this._lookaheadToken(0))}},_match:function(e){if(this._lookahead(0)!==e){var t=this._lookaheadToken(0),r=new Error("Expected "+e+", got: "+t.type);throw r.name="ParserError",r}this._advance()},_errorToken:function(e){var t=new Error("Invalid token ("+e.type+'): "'+e.value+'"');throw t.name="ParserError",t},_parseIndexExpression:function(){if("Colon"===this._lookahead(0)||"Colon"===this._lookahead(1))return this._parseSliceExpression();var e={type:"Index",value:this._lookaheadToken(0).value};return this._advance(),this._match("Rbracket"),e},_projectIfSlice:function(e,t){var r={type:"IndexExpression",children:[e,t]};return"Slice"===t.type?{type:"Projection",children:[r,this._parseProjectionRHS(k.Star)]}:r},_parseSliceExpression:function(){for(var e=[null,null,null],t=0,r=this._lookahead(0);"Rbracket"!==r&&t<3;){if("Colon"===r)t++,this._advance();else{if("Number"!==r){var n=this._lookahead(0),i=new Error("Syntax error, unexpected token: "+n.value+"("+n.type+")");throw i.name="Parsererror",i}e[t]=this._lookaheadToken(0).value,this._advance()}r=this._lookahead(0)}return this._match("Rbracket"),{type:"Slice",children:e}},_parseComparator:function(e,t){return{type:"Comparator",name:t,children:[e,this.expression(k[t])]}},_parseDotRHS:function(e){var t=this._lookahead(0);return["UnquotedIdentifier","QuotedIdentifier","Star"].indexOf(t)>=0?this.expression(e):"Lbracket"===t?(this._match("Lbracket"),this._parseMultiselectList()):"Lbrace"===t?(this._match("Lbrace"),this._parseMultiselectHash()):void 0},_parseProjectionRHS:function(e){var t;if(k[this._lookahead(0)]<10)t={type:"Identity"};else if("Lbracket"===this._lookahead(0))t=this.expression(e);else if("Filter"===this._lookahead(0))t=this.expression(e);else{if("Dot"!==this._lookahead(0)){var r=this._lookaheadToken(0),n=new Error("Sytanx error, unexpected token: "+r.value+"("+r.type+")");throw n.name="ParserError",n}this._match("Dot"),t=this._parseDotRHS(e)}return t},_parseMultiselectList:function(){for(var e=[];"Rbracket"!==this._lookahead(0);){var t=this.expression(0);if(e.push(t),"Comma"===this._lookahead(0)&&(this._match("Comma"),"Rbracket"===this._lookahead(0)))throw new Error("Unexpected token Rbracket")}return this._match("Rbracket"),{type:"MultiSelectList",children:e}},_parseMultiselectHash:function(){for(var e,t,r,n=[],i=["UnquotedIdentifier","QuotedIdentifier"];;){if(e=this._lookaheadToken(0),i.indexOf(e.type)<0)throw new Error("Expecting an identifier token, got: "+e.type);if(t=e.value,this._advance(),this._match("Colon"),r={type:"KeyValuePair",name:t,value:this.expression(0)},n.push(r),"Comma"===this._lookahead(0))this._match("Comma");else if("Rbrace"===this._lookahead(0)){this._match("Rbrace");break}}return{type:"MultiSelectHash",children:n}}},x.prototype={search:function(e,t){return this.visit(e,t)},visit:function(e,s){var a,u,o,c,h,l,_,p,f;switch(e.type){case"Field":return null!==s&&r(s)?void 0===(l=s[e.name])?null:l:null;case"Subexpression":for(o=this.visit(e.children[0],s),f=1;f<e.children.length;f++)if(null===(o=this.visit(e.children[1],o)))return null;return o;case"IndexExpression":return _=this.visit(e.children[0],s),this.visit(e.children[1],_);case"Index":if(!t(s))return null;var d=e.value;return d<0&&(d=s.length+d),void 0===(o=s[d])&&(o=null),o;case"Slice":if(!t(s))return null;var v=e.children.slice(0),y=this.computeSliceParams(s.length,v),g=y[0],m=y[1],k=y[2];if(o=[],k>0)for(f=g;f<m;f+=k)o.push(s[f]);else for(f=g;f>m;f+=k)o.push(s[f]);return o;case"Projection":var b=this.visit(e.children[0],s);if(!t(b))return null;for(p=[],f=0;f<b.length;f++)null!==(u=this.visit(e.children[1],b[f]))&&p.push(u);return p;case"ValueProjection":if(!r(b=this.visit(e.children[0],s)))return null;p=[];var x=function(e){for(var t=Object.keys(e),r=[],n=0;n<t.length;n++)r.push(e[t[n]]);return r}(b);for(f=0;f<x.length;f++)null!==(u=this.visit(e.children[1],x[f]))&&p.push(u);return p;case"FilterProjection":if(!t(b=this.visit(e.children[0],s)))return null;var E=[],S=[];for(f=0;f<b.length;f++)i(a=this.visit(e.children[2],b[f]))||E.push(b[f]);for(var T=0;T<E.length;T++)null!==(u=this.visit(e.children[1],E[T]))&&S.push(u);return S;case"Comparator":switch(c=this.visit(e.children[0],s),h=this.visit(e.children[1],s),e.name){case"EQ":o=n(c,h);break;case"NE":o=!n(c,h);break;case"GT":o=c>h;break;case"GTE":o=c>=h;break;case"LT":o=c<h;break;case"LTE":o=c<=h;break;default:throw new Error("Unknown comparator: "+e.name)}return o;case"Flatten":var w=this.visit(e.children[0],s);if(!t(w))return null;var N=[];for(f=0;f<w.length;f++)t(u=w[f])?N.push.apply(N,u):N.push(u);return N;case"Identity":return s;case"MultiSelectList":if(null===s)return null;for(p=[],f=0;f<e.children.length;f++)p.push(this.visit(e.children[f],s));return p;case"MultiSelectHash":if(null===s)return null;var j;for(p={},f=0;f<e.children.length;f++)p[(j=e.children[f]).name]=this.visit(j.value,s);return p;case"OrExpression":return i(a=this.visit(e.children[0],s))&&(a=this.visit(e.children[1],s)),a;case"AndExpression":return!0===i(c=this.visit(e.children[0],s))?c:this.visit(e.children[1],s);case"NotExpression":return i(c=this.visit(e.children[0],s));case"Literal":return e.value;case"Pipe":return _=this.visit(e.children[0],s),this.visit(e.children[1],_);case"Current":return s;case"Function":var L=[];for(f=0;f<e.children.length;f++)L.push(this.visit(e.children[f],s));return this.runtime.callFunction(e.name,L);case"ExpressionReference":var R=e.children[0];return R.jmespathType="Expref",R;default:throw new Error("Unknown node type: "+e.type)}},computeSliceParams:function(e,t){var r=t[0],n=t[1],i=t[2],s=[null,null,null];if(null===i)i=1;else if(0===i){var a=new Error("Invalid slice, step cannot be 0");throw a.name="RuntimeError",a}var u=i<0;return r=null===r?u?e-1:0:this.capSliceRange(e,r,i),n=null===n?u?-1:e:this.capSliceRange(e,n,i),s[0]=r,s[1]=n,s[2]=i,s},capSliceRange:function(e,t,r){return t<0?(t+=e)<0&&(t=r<0?-1:0):t>=e&&(t=r<0?e-1:e),t}},E.prototype={callFunction:function(e,t){var r=this.functionTable[e];if(void 0===r)throw new Error("Unknown function: "+e+"()");return this._validateArgs(e,t,r._signature),r._func.call(this,t)},_validateArgs:function(e,t,r){var n,i,s,a;if(r[r.length-1].variadic){if(t.length<r.length)throw n=1===r.length?" argument":" arguments",new Error("ArgumentError: "+e+"() takes at least"+r.length+n+" but received "+t.length)}else if(t.length!==r.length)throw n=1===r.length?" argument":" arguments",new Error("ArgumentError: "+e+"() takes "+r.length+n+" but received "+t.length);for(var u=0;u<r.length;u++){a=!1,i=r[u].types,s=this._getTypeName(t[u]);for(var o=0;o<i.length;o++)if(this._typeMatches(s,i[o],t[u])){a=!0;break}if(!a){var c=i.map(function(e){return f[e]}).join(",");throw new Error("TypeError: "+e+"() expected argument "+(u+1)+" to be type "+c+" but received type "+f[s]+" instead.")}}},_typeMatches:function(e,t,r){if(t===u)return!0;if(t!==p&&t!==_&&t!==c)return e===t;if(t===c)return e===c;if(e===c){var n;t===_?n=a:t===p&&(n=o);for(var i=0;i<r.length;i++)if(!this._typeMatches(this._getTypeName(r[i]),n,r[i]))return!1;return!0}},_getTypeName:function(e){switch(Object.prototype.toString.call(e)){case"[object String]":return o;case"[object Number]":return a;case"[object Array]":return c;case"[object Boolean]":return 5;case"[object Null]":return 7;case"[object Object]":return"Expref"===e.jmespathType?l:h}},_functionStartsWith:function(e){return 0===e[0].lastIndexOf(e[1])},_functionEndsWith:function(e){var t=e[0],r=e[1];return-1!==t.indexOf(r,t.length-r.length)},_functionReverse:function(e){if(this._getTypeName(e[0])===o){for(var t=e[0],r="",n=t.length-1;n>=0;n--)r+=t[n];return r}var i=e[0].slice(0);return i.reverse(),i},_functionAbs:function(e){return Math.abs(e[0])},_functionCeil:function(e){return Math.ceil(e[0])},_functionAvg:function(e){for(var t=0,r=e[0],n=0;n<r.length;n++)t+=r[n];return t/r.length},_functionContains:function(e){return e[0].indexOf(e[1])>=0},_functionFloor:function(e){return Math.floor(e[0])},_functionLength:function(e){return r(e[0])?Object.keys(e[0]).length:e[0].length},_functionMap:function(e){for(var t=[],r=this._interpreter,n=e[0],i=e[1],s=0;s<i.length;s++)t.push(r.visit(n,i[s]));return t},_functionMerge:function(e){for(var t={},r=0;r<e.length;r++){var n=e[r];for(var i in n)t[i]=n[i]}return t},_functionMax:function(e){if(e[0].length>0){if(this._getTypeName(e[0][0])===a)return Math.max.apply(Math,e[0]);for(var t=e[0],r=t[0],n=1;n<t.length;n++)r.localeCompare(t[n])<0&&(r=t[n]);return r}return null},_functionMin:function(e){if(e[0].length>0){if(this._getTypeName(e[0][0])===a)return Math.min.apply(Math,e[0]);for(var t=e[0],r=t[0],n=1;n<t.length;n++)t[n].localeCompare(r)<0&&(r=t[n]);return r}return null},_functionSum:function(e){for(var t=0,r=e[0],n=0;n<r.length;n++)t+=r[n];return t},_functionType:function(e){switch(this._getTypeName(e[0])){case a:return"number";case o:return"string";case c:return"array";case h:return"object";case 5:return"boolean";case l:return"expref";case 7:return"null"}},_functionKeys:function(e){return Object.keys(e[0])},_functionValues:function(e){for(var t=e[0],r=Object.keys(t),n=[],i=0;i<r.length;i++)n.push(t[r[i]]);return n},_functionJoin:function(e){var t=e[0];return e[1].join(t)},_functionToArray:function(e){return this._getTypeName(e[0])===c?e[0]:[e[0]]},_functionToString:function(e){return this._getTypeName(e[0])===o?e[0]:JSON.stringify(e[0])},_functionToNumber:function(e){var t,r=this._getTypeName(e[0]);return r===a?e[0]:r!==o||(t=+e[0],isNaN(t))?null:t},_functionNotNull:function(e){for(var t=0;t<e.length;t++)if(7!==this._getTypeName(e[t]))return e[t];return null},_functionSort:function(e){var t=e[0].slice(0);return t.sort(),t},_functionSortBy:function(e){var t=e[0].slice(0);if(0===t.length)return t;var r=this._interpreter,n=e[1],i=this._getTypeName(r.visit(n,t[0]));if([a,o].indexOf(i)<0)throw new Error("TypeError");for(var s=this,u=[],c=0;c<t.length;c++)u.push([c,t[c]]);u.sort(function(e,t){var a=r.visit(n,e[1]),u=r.visit(n,t[1]);if(s._getTypeName(a)!==i)throw new Error("TypeError: expected "+i+", received "+s._getTypeName(a));if(s._getTypeName(u)!==i)throw new Error("TypeError: expected "+i+", received "+s._getTypeName(u));return a>u?1:a<u?-1:e[0]-t[0]});for(var h=0;h<u.length;h++)t[h]=u[h][1];return t},_functionMaxBy:function(e){for(var t,r,n=e[1],i=e[0],s=this.createKeyFunction(n,[a,o]),u=-1/0,c=0;c<i.length;c++)(r=s(i[c]))>u&&(u=r,t=i[c]);return t},_functionMinBy:function(e){for(var t,r,n=e[1],i=e[0],s=this.createKeyFunction(n,[a,o]),u=1/0,c=0;c<i.length;c++)(r=s(i[c]))<u&&(u=r,t=i[c]);return t},createKeyFunction:function(e,t){var r=this,n=this._interpreter;return function(i){var s=n.visit(e,i);if(t.indexOf(r._getTypeName(s))<0){var a="TypeError: expected one of "+t+", received "+r._getTypeName(s);throw new Error(a)}return s}}},e.tokenize=function(e){return(new m).tokenize(e)},e.compile=function(e){return(new b).parse(e)},e.search=function(e,t){var r=new b,n=new E,i=new x(n);n._interpreter=i;var s=r.parse(t);return i.search(s,e)},e.strictDeepEqual=n}("undefined"==typeof exports?(void 0).jmespath={}:exports);

},{}],137:[function(require,module,exports){
"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t){t.parser=function(t,e){return new s(t,e)},t.SAXParser=s,t.SAXStream=r,t.createStream=function(t,e){return new r(t,e)},t.MAX_BUFFER_LENGTH=65536;var e,i=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];function s(e,a){if(!(this instanceof s))return new s(e,a);!function(t){for(var e=0,s=i.length;e<s;e++)t[i[e]]=""}(this),this.q=this.c="",this.bufferCheckPosition=t.MAX_BUFFER_LENGTH,this.opt=a||{},this.opt.lowercase=this.opt.lowercase||this.opt.lowercasetags,this.looseCase=this.opt.lowercase?"toLowerCase":"toUpperCase",this.tags=[],this.closed=this.closedRoot=this.sawRoot=!1,this.tag=this.error=null,this.strict=!!e,this.noscript=!(!e&&!this.opt.noscript),this.state=O.BEGIN,this.strictEntities=this.opt.strictEntities,this.ENTITIES=this.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),this.attribList=[],this.opt.xmlns&&(this.ns=Object.create(m)),this.trackPosition=!1!==this.opt.position,this.trackPosition&&(this.position=this.line=this.column=0),F(this,"onready")}t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"],Object.create||(Object.create=function(t){function e(){}return e.prototype=t,new e}),Object.keys||(Object.keys=function(t){var e=[];for(var i in t)t.hasOwnProperty(i)&&e.push(i);return e}),s.prototype={end:function(){L(this)},write:function(e){if(this.error)throw this.error;if(this.closed)return P(this,"Cannot write after close. Assign an onready handler.");if(null===e)return L(this);"object"===_typeof(e)&&(e=e.toString());var s=0,a="";for(;a=q(e,s++),this.c=a,a;)switch(this.trackPosition&&(this.position++,"\n"===a?(this.line++,this.column=0):this.column++),this.state){case O.BEGIN:if(this.state=O.BEGIN_WHITESPACE,"\ufeff"===a)continue;Y(this,a);continue;case O.BEGIN_WHITESPACE:Y(this,a);continue;case O.TEXT:if(this.sawRoot&&!this.closedRoot){for(var r=s-1;a&&"<"!==a&&"&"!==a;)(a=q(e,s++))&&this.trackPosition&&(this.position++,"\n"===a?(this.line++,this.column=0):this.column++);this.textNode+=e.substring(r,s-1)}"<"!==a||this.sawRoot&&this.closedRoot&&!this.strict?(!I(n,a)||this.sawRoot&&!this.closedRoot||B(this,"Text data outside of root node."),"&"===a?this.state=O.TEXT_ENTITY:this.textNode+=a):(this.state=O.OPEN_WAKA,this.startTagPosition=this.position);continue;case O.SCRIPT:"<"===a?this.state=O.SCRIPT_ENDING:this.script+=a;continue;case O.SCRIPT_ENDING:"/"===a?this.state=O.CLOSE_TAG:(this.script+="<"+a,this.state=O.SCRIPT);continue;case O.OPEN_WAKA:if("!"===a)this.state=O.SGML_DECL,this.sgmlDecl="";else if(A(n,a));else if(A(f,a))this.state=O.OPEN_TAG,this.tagName=a;else if("/"===a)this.state=O.CLOSE_TAG,this.tagName="";else if("?"===a)this.state=O.PROC_INST,this.procInstName=this.procInstBody="";else{if(B(this,"Unencoded <"),this.startTagPosition+1<this.position){var o=this.position-this.startTagPosition;a=new Array(o).join(" ")+a}this.textNode+="<"+a,this.state=O.TEXT}continue;case O.SGML_DECL:(this.sgmlDecl+a).toUpperCase()===l?(y(this,"onopencdata"),this.state=O.CDATA,this.sgmlDecl="",this.cdata=""):this.sgmlDecl+a==="--"?(this.state=O.COMMENT,this.comment="",this.sgmlDecl=""):(this.sgmlDecl+a).toUpperCase()===T?(this.state=O.DOCTYPE,(this.doctype||this.sawRoot)&&B(this,"Inappropriately located doctype declaration"),this.doctype="",this.sgmlDecl=""):">"===a?(y(this,"onsgmldeclaration",this.sgmlDecl),this.sgmlDecl="",this.state=O.TEXT):A(u,a)?(this.state=O.SGML_DECL_QUOTED,this.sgmlDecl+=a):this.sgmlDecl+=a;continue;case O.SGML_DECL_QUOTED:a===this.q&&(this.state=O.SGML_DECL,this.q=""),this.sgmlDecl+=a;continue;case O.DOCTYPE:">"===a?(this.state=O.TEXT,y(this,"ondoctype",this.doctype),this.doctype=!0):(this.doctype+=a,"["===a?this.state=O.DOCTYPE_DTD:A(u,a)&&(this.state=O.DOCTYPE_QUOTED,this.q=a));continue;case O.DOCTYPE_QUOTED:this.doctype+=a,a===this.q&&(this.q="",this.state=O.DOCTYPE);continue;case O.DOCTYPE_DTD:this.doctype+=a,"]"===a?this.state=O.DOCTYPE:A(u,a)&&(this.state=O.DOCTYPE_DTD_QUOTED,this.q=a);continue;case O.DOCTYPE_DTD_QUOTED:this.doctype+=a,a===this.q&&(this.state=O.DOCTYPE_DTD,this.q="");continue;case O.COMMENT:"-"===a?this.state=O.COMMENT_ENDING:this.comment+=a;continue;case O.COMMENT_ENDING:"-"===a?(this.state=O.COMMENT_ENDED,this.comment=R(this.opt,this.comment),this.comment&&y(this,"oncomment",this.comment),this.comment=""):(this.comment+="-"+a,this.state=O.COMMENT);continue;case O.COMMENT_ENDED:">"!==a?(B(this,"Malformed comment"),this.comment+="--"+a,this.state=O.COMMENT):this.state=O.TEXT;continue;case O.CDATA:"]"===a?this.state=O.CDATA_ENDING:this.cdata+=a;continue;case O.CDATA_ENDING:"]"===a?this.state=O.CDATA_ENDING_2:(this.cdata+="]"+a,this.state=O.CDATA);continue;case O.CDATA_ENDING_2:">"===a?(this.cdata&&y(this,"oncdata",this.cdata),y(this,"onclosecdata"),this.cdata="",this.state=O.TEXT):"]"===a?this.cdata+="]":(this.cdata+="]]"+a,this.state=O.CDATA);continue;case O.PROC_INST:"?"===a?this.state=O.PROC_INST_ENDING:A(n,a)?this.state=O.PROC_INST_BODY:this.procInstName+=a;continue;case O.PROC_INST_BODY:if(!this.procInstBody&&A(n,a))continue;"?"===a?this.state=O.PROC_INST_ENDING:this.procInstBody+=a;continue;case O.PROC_INST_ENDING:">"===a?(y(this,"onprocessinginstruction",{name:this.procInstName,body:this.procInstBody}),this.procInstName=this.procInstBody="",this.state=O.TEXT):(this.procInstBody+="?"+a,this.state=O.PROC_INST_BODY);continue;case O.OPEN_TAG:A(N,a)?this.tagName+=a:(U(this),">"===a?G(this):"/"===a?this.state=O.OPEN_TAG_SLASH:(I(n,a)&&B(this,"Invalid character in tag name"),this.state=O.ATTRIB));continue;case O.OPEN_TAG_SLASH:">"===a?(G(this,!0),M(this)):(B(this,"Forward-slash in opening tag not followed by >"),this.state=O.ATTRIB);continue;case O.ATTRIB:if(A(n,a))continue;">"===a?G(this):"/"===a?this.state=O.OPEN_TAG_SLASH:A(f,a)?(this.attribName=a,this.attribValue="",this.state=O.ATTRIB_NAME):B(this,"Invalid attribute name");continue;case O.ATTRIB_NAME:"="===a?this.state=O.ATTRIB_VALUE:">"===a?(B(this,"Attribute without value"),this.attribValue=this.attribName,w(this),G(this)):A(n,a)?this.state=O.ATTRIB_NAME_SAW_WHITE:A(N,a)?this.attribName+=a:B(this,"Invalid attribute name");continue;case O.ATTRIB_NAME_SAW_WHITE:if("="===a)this.state=O.ATTRIB_VALUE;else{if(A(n,a))continue;B(this,"Attribute without value"),this.tag.attributes[this.attribName]="",this.attribValue="",y(this,"onattribute",{name:this.attribName,value:""}),this.attribName="",">"===a?G(this):A(f,a)?(this.attribName=a,this.state=O.ATTRIB_NAME):(B(this,"Invalid attribute name"),this.state=O.ATTRIB)}continue;case O.ATTRIB_VALUE:if(A(n,a))continue;A(u,a)?(this.q=a,this.state=O.ATTRIB_VALUE_QUOTED):(B(this,"Unquoted attribute value"),this.state=O.ATTRIB_VALUE_UNQUOTED,this.attribValue=a);continue;case O.ATTRIB_VALUE_QUOTED:if(a!==this.q){"&"===a?this.state=O.ATTRIB_VALUE_ENTITY_Q:this.attribValue+=a;continue}w(this),this.q="",this.state=O.ATTRIB_VALUE_CLOSED;continue;case O.ATTRIB_VALUE_CLOSED:A(n,a)?this.state=O.ATTRIB:">"===a?G(this):"/"===a?this.state=O.OPEN_TAG_SLASH:A(f,a)?(B(this,"No whitespace between attributes"),this.attribName=a,this.attribValue="",this.state=O.ATTRIB_NAME):B(this,"Invalid attribute name");continue;case O.ATTRIB_VALUE_UNQUOTED:if(I(h,a)){"&"===a?this.state=O.ATTRIB_VALUE_ENTITY_U:this.attribValue+=a;continue}w(this),">"===a?G(this):this.state=O.ATTRIB;continue;case O.CLOSE_TAG:if(this.tagName)">"===a?M(this):A(N,a)?this.tagName+=a:this.script?(this.script+="</"+this.tagName,this.tagName="",this.state=O.SCRIPT):(I(n,a)&&B(this,"Invalid tagname in closing tag"),this.state=O.CLOSE_TAG_SAW_WHITE);else{if(A(n,a))continue;I(f,a)?this.script?(this.script+="</"+a,this.state=O.SCRIPT):B(this,"Invalid tagname in closing tag."):this.tagName=a}continue;case O.CLOSE_TAG_SAW_WHITE:if(A(n,a))continue;">"===a?M(this):B(this,"Invalid characters in closing tag");continue;case O.TEXT_ENTITY:case O.ATTRIB_VALUE_ENTITY_Q:case O.ATTRIB_VALUE_ENTITY_U:var c,p;switch(this.state){case O.TEXT_ENTITY:c=O.TEXT,p="textNode";break;case O.ATTRIB_VALUE_ENTITY_Q:c=O.ATTRIB_VALUE_QUOTED,p="attribValue";break;case O.ATTRIB_VALUE_ENTITY_U:c=O.ATTRIB_VALUE_UNQUOTED,p="attribValue"}";"===a?(this[p]+=V(this),this.entity="",this.state=c):A(this.entity.length?d:_,a)?this.entity+=a:(B(this,"Invalid character in entity name"),this[p]+="&"+this.entity+a,this.entity="",this.state=c);continue;default:throw new Error(this,"Unknown state: "+this.state)}this.position>=this.bufferCheckPosition&&function(e){for(var s=Math.max(t.MAX_BUFFER_LENGTH,10),a=0,r=0,n=i.length;r<n;r++){var o=e[i[r]].length;if(o>s)switch(i[r]){case"textNode":v(e);break;case"cdata":y(e,"oncdata",e.cdata),e.cdata="";break;case"script":y(e,"onscript",e.script),e.script="";break;default:P(e,"Max buffer length exceeded: "+i[r])}a=Math.max(a,o)}var c=t.MAX_BUFFER_LENGTH-a;e.bufferCheckPosition=c+e.position}(this);return this},resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){var t;v(t=this),""!==t.cdata&&(y(t,"oncdata",t.cdata),t.cdata=""),""!==t.script&&(y(t,"onscript",t.script),t.script="")}};try{e=require("stream").Stream}catch(t){e=function(){}}var a=t.EVENTS.filter(function(t){return"error"!==t&&"end"!==t});function r(t,i){if(!(this instanceof r))return new r(t,i);e.apply(this),this._parser=new s(t,i),this.writable=!0,this.readable=!0;var n=this;this._parser.onend=function(){n.emit("end")},this._parser.onerror=function(t){n.emit("error",t),n._parser.error=null},this._decoder=null,a.forEach(function(t){Object.defineProperty(n,"on"+t,{get:function(){return n._parser["on"+t]},set:function(e){if(!e)return n.removeAllListeners(t),n._parser["on"+t]=e,e;n.on(t,e)},enumerable:!0,configurable:!1})})}r.prototype=Object.create(e.prototype,{constructor:{value:r}}),r.prototype.write=function(t){if("function"==typeof Buffer&&"function"==typeof Buffer.isBuffer&&Buffer.isBuffer(t)){if(!this._decoder){var e=require("string_decoder").StringDecoder;this._decoder=new e("utf8")}t=this._decoder.write(t)}return this._parser.write(t.toString()),this.emit("data",t),!0},r.prototype.end=function(t){return t&&t.length&&this.write(t),this._parser.end(),!0},r.prototype.on=function(t,i){var s=this;return s._parser["on"+t]||-1===a.indexOf(t)||(s._parser["on"+t]=function(){var e=1===arguments.length?[arguments[0]]:Array.apply(null,arguments);e.splice(0,0,t),s.emit.apply(s,e)}),e.prototype.on.call(s,t,i)};var n="\r\n\t ",o="0124356789",c="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",u="'\"",h=n+">",l="[CDATA[",T="DOCTYPE",p="http://www.w3.org/XML/1998/namespace",E="http://www.w3.org/2000/xmlns/",m={xml:p,xmlns:E};n=g(n),o=g(o),c=g(c);var f=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,N=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/,_=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,d=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/;function g(t){return t.split("").reduce(function(t,e){return t[e]=!0,t},{})}function A(t,e){return function(t){return"[object RegExp]"===Object.prototype.toString.call(t)}(t)?!!e.match(t):t[e]}function I(t,e){return!A(t,e)}u=g(u),h=g(h);var D,b,C,O=0;for(var S in t.STATE={BEGIN:O++,BEGIN_WHITESPACE:O++,TEXT:O++,TEXT_ENTITY:O++,OPEN_WAKA:O++,SGML_DECL:O++,SGML_DECL_QUOTED:O++,DOCTYPE:O++,DOCTYPE_QUOTED:O++,DOCTYPE_DTD:O++,DOCTYPE_DTD_QUOTED:O++,COMMENT_STARTING:O++,COMMENT:O++,COMMENT_ENDING:O++,COMMENT_ENDED:O++,CDATA:O++,CDATA_ENDING:O++,CDATA_ENDING_2:O++,PROC_INST:O++,PROC_INST_BODY:O++,PROC_INST_ENDING:O++,OPEN_TAG:O++,OPEN_TAG_SLASH:O++,ATTRIB:O++,ATTRIB_NAME:O++,ATTRIB_NAME_SAW_WHITE:O++,ATTRIB_VALUE:O++,ATTRIB_VALUE_QUOTED:O++,ATTRIB_VALUE_CLOSED:O++,ATTRIB_VALUE_UNQUOTED:O++,ATTRIB_VALUE_ENTITY_Q:O++,ATTRIB_VALUE_ENTITY_U:O++,CLOSE_TAG:O++,CLOSE_TAG_SAW_WHITE:O++,SCRIPT:O++,SCRIPT_ENDING:O++},t.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},t.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(t.ENTITIES).forEach(function(e){var i=t.ENTITIES[e],s="number"==typeof i?String.fromCharCode(i):i;t.ENTITIES[e]=s}),t.STATE)t.STATE[t.STATE[S]]=S;function F(t,e,i){t[e]&&t[e](i)}function y(t,e,i){t.textNode&&v(t),F(t,e,i)}function v(t){t.textNode=R(t.opt,t.textNode),t.textNode&&F(t,"ontext",t.textNode),t.textNode=""}function R(t,e){return t.trim&&(e=e.trim()),t.normalize&&(e=e.replace(/\s+/g," ")),e}function P(t,e){return v(t),t.trackPosition&&(e+="\nLine: "+t.line+"\nColumn: "+t.column+"\nChar: "+t.c),e=new Error(e),t.error=e,F(t,"onerror",e),t}function L(t){return t.sawRoot&&!t.closedRoot&&B(t,"Unclosed root tag"),t.state!==O.BEGIN&&t.state!==O.BEGIN_WHITESPACE&&t.state!==O.TEXT&&P(t,"Unexpected end"),v(t),t.c="",t.closed=!0,F(t,"onend"),s.call(t,t.strict,t.opt),t}function B(t,e){if("object"!==_typeof(t)||!(t instanceof s))throw new Error("bad call to strictFail");t.strict&&P(t,e)}function U(t){t.strict||(t.tagName=t.tagName[t.looseCase]());var e=t.tags[t.tags.length-1]||t,i=t.tag={name:t.tagName,attributes:{}};t.opt.xmlns&&(i.ns=e.ns),t.attribList.length=0,y(t,"onopentagstart",i)}function x(t,e){var i=t.indexOf(":")<0?["",t]:t.split(":"),s=i[0],a=i[1];return e&&"xmlns"===t&&(s="xmlns",a=""),{prefix:s,local:a}}function w(t){if(t.strict||(t.attribName=t.attribName[t.looseCase]()),-1!==t.attribList.indexOf(t.attribName)||t.tag.attributes.hasOwnProperty(t.attribName))t.attribName=t.attribValue="";else{if(t.opt.xmlns){var e=x(t.attribName,!0),i=e.prefix,s=e.local;if("xmlns"===i)if("xml"===s&&t.attribValue!==p)B(t,"xml: prefix must be bound to "+p+"\nActual: "+t.attribValue);else if("xmlns"===s&&t.attribValue!==E)B(t,"xmlns: prefix must be bound to "+E+"\nActual: "+t.attribValue);else{var a=t.tag,r=t.tags[t.tags.length-1]||t;a.ns===r.ns&&(a.ns=Object.create(r.ns)),a.ns[s]=t.attribValue}t.attribList.push([t.attribName,t.attribValue])}else t.tag.attributes[t.attribName]=t.attribValue,y(t,"onattribute",{name:t.attribName,value:t.attribValue});t.attribName=t.attribValue=""}}function G(t,e){if(t.opt.xmlns){var i=t.tag,s=x(t.tagName);i.prefix=s.prefix,i.local=s.local,i.uri=i.ns[s.prefix]||"",i.prefix&&!i.uri&&(B(t,"Unbound namespace prefix: "+JSON.stringify(t.tagName)),i.uri=s.prefix);var a=t.tags[t.tags.length-1]||t;i.ns&&a.ns!==i.ns&&Object.keys(i.ns).forEach(function(e){y(t,"onopennamespace",{prefix:e,uri:i.ns[e]})});for(var r=0,n=t.attribList.length;r<n;r++){var o=t.attribList[r],c=o[0],u=o[1],h=x(c,!0),l=h.prefix,T=h.local,p=""===l?"":i.ns[l]||"",E={name:c,value:u,prefix:l,local:T,uri:p};l&&"xmlns"!==l&&!p&&(B(t,"Unbound namespace prefix: "+JSON.stringify(l)),E.uri=l),t.tag.attributes[c]=E,y(t,"onattribute",E)}t.attribList.length=0}t.tag.isSelfClosing=!!e,t.sawRoot=!0,t.tags.push(t.tag),y(t,"onopentag",t.tag),e||(t.noscript||"script"!==t.tagName.toLowerCase()?t.state=O.TEXT:t.state=O.SCRIPT,t.tag=null,t.tagName=""),t.attribName=t.attribValue="",t.attribList.length=0}function M(t){if(!t.tagName)return B(t,"Weird empty close tag."),t.textNode+="</>",void(t.state=O.TEXT);if(t.script){if("script"!==t.tagName)return t.script+="</"+t.tagName+">",t.tagName="",void(t.state=O.SCRIPT);y(t,"onscript",t.script),t.script=""}var e=t.tags.length,i=t.tagName;t.strict||(i=i[t.looseCase]());for(var s=i;e--;){if(t.tags[e].name===s)break;B(t,"Unexpected close tag")}if(e<0)return B(t,"Unmatched closing tag: "+t.tagName),t.textNode+="</"+t.tagName+">",void(t.state=O.TEXT);t.tagName=i;for(var a=t.tags.length;a-- >e;){var r=t.tag=t.tags.pop();t.tagName=t.tag.name,y(t,"onclosetag",t.tagName);var n={};for(var o in r.ns)n[o]=r.ns[o];var c=t.tags[t.tags.length-1]||t;t.opt.xmlns&&r.ns!==c.ns&&Object.keys(r.ns).forEach(function(e){var i=r.ns[e];y(t,"onclosenamespace",{prefix:e,uri:i})})}0===e&&(t.closedRoot=!0),t.tagName=t.attribValue=t.attribName="",t.attribList.length=0,t.state=O.TEXT}function V(t){var e,i=t.entity,s=i.toLowerCase(),a="";return t.ENTITIES[i]?t.ENTITIES[i]:t.ENTITIES[s]?t.ENTITIES[s]:("#"===(i=s).charAt(0)&&("x"===i.charAt(1)?(i=i.slice(2),a=(e=parseInt(i,16)).toString(16)):(i=i.slice(1),a=(e=parseInt(i,10)).toString(10))),i=i.replace(/^0+/,""),a.toLowerCase()!==i?(B(t,"Invalid character entity"),"&"+t.entity+";"):String.fromCodePoint(e))}function Y(t,e){"<"===e?(t.state=O.OPEN_WAKA,t.startTagPosition=t.position):I(n,e)&&(B(t,"Non-whitespace before first tag."),t.textNode=e,t.state=O.TEXT)}function q(t,e){var i="";return e<t.length&&(i=t.charAt(e)),i}O=t.STATE,String.fromCodePoint||(D=String.fromCharCode,b=Math.floor,C=function(){var t,e,i=[],s=-1,a=arguments.length;if(!a)return"";for(var r="";++s<a;){var n=Number(arguments[s]);if(!isFinite(n)||n<0||n>1114111||b(n)!==n)throw RangeError("Invalid code point: "+n);n<=65535?i.push(n):(t=55296+((n-=65536)>>10),e=n%1024+56320,i.push(t,e)),(s+1===a||i.length>16384)&&(r+=D.apply(null,i),i.length=0)}return r},Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:C,configurable:!0,writable:!0}):String.fromCodePoint=C)}("undefined"==typeof exports?(void 0).sax={}:exports);

},{"stream":undefined,"string_decoder":undefined}],138:[function(require,module,exports){
"use strict";var stripAnsi=require("strip-ansi"),isFullwidthCodePoint=require("is-fullwidth-code-point"),emojiRegex=require("emoji-regex"),stringWidth=function(e){if("string"!=typeof e||0===e.length)return 0;if(0===(e=stripAnsi(e)).length)return 0;e=e.replace(emojiRegex(),"  ");for(var i=0,t=0;t<e.length;t++){var r=e.codePointAt(t);r<=31||r>=127&&r<=159||(r>=768&&r<=879||(r>65535&&t++,i+=isFullwidthCodePoint(r)?2:1))}return i};module.exports=stringWidth,module.exports.default=stringWidth;

},{"emoji-regex":134,"is-fullwidth-code-point":135,"strip-ansi":139}],139:[function(require,module,exports){
"use strict";var ansiRegex=require("ansi-regex");module.exports=function(e){return"string"==typeof e?e.replace(ansiRegex(),""):e};

},{"ansi-regex":13}],140:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;for(var byteToHex=[],i=0;i<256;++i)byteToHex[i]=(i+256).toString(16).substr(1);function bytesToUuid(e,t){var o=t||0,r=byteToHex;return[r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]]].join("")}var _default=bytesToUuid;exports.default=_default;

},{}],141:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"v1",{enumerable:!0,get:function(){return _v.default}}),Object.defineProperty(exports,"v3",{enumerable:!0,get:function(){return _v2.default}}),Object.defineProperty(exports,"v4",{enumerable:!0,get:function(){return _v3.default}}),Object.defineProperty(exports,"v5",{enumerable:!0,get:function(){return _v4.default}});var _v=_interopRequireDefault(require("./v1.js")),_v2=_interopRequireDefault(require("./v3.js")),_v3=_interopRequireDefault(require("./v4.js")),_v4=_interopRequireDefault(require("./v5.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}

},{"./v1.js":145,"./v3.js":146,"./v4.js":148,"./v5.js":149}],142:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _crypto=_interopRequireDefault(require("crypto"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function md5(e){return Array.isArray(e)?e=Buffer.from(e):"string"==typeof e&&(e=Buffer.from(e,"utf8")),_crypto.default.createHash("md5").update(e).digest()}var _default=md5;exports.default=_default;

},{"crypto":undefined}],143:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=rng;var _crypto=_interopRequireDefault(require("crypto"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function rng(){return _crypto.default.randomBytes(16)}

},{"crypto":undefined}],144:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _crypto=_interopRequireDefault(require("crypto"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function sha1(e){return Array.isArray(e)?e=Buffer.from(e):"string"==typeof e&&(e=Buffer.from(e,"utf8")),_crypto.default.createHash("sha1").update(e).digest()}var _default=sha1;exports.default=_default;

},{"crypto":undefined}],145:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _nodeId,_clockseq,_rng=_interopRequireDefault(require("./rng.js")),_bytesToUuid=_interopRequireDefault(require("./bytesToUuid.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _lastMSecs=0,_lastNSecs=0;function v1(e,s,r){var t=s&&r||0,l=s||[],o=(e=e||{}).node||_nodeId,u=void 0!==e.clockseq?e.clockseq:_clockseq;if(null==o||null==u){var a=e.random||(e.rng||_rng.default)();null==o&&(o=_nodeId=[1|a[0],a[1],a[2],a[3],a[4],a[5]]),null==u&&(u=_clockseq=16383&(a[6]<<8|a[7]))}var c=void 0!==e.msecs?e.msecs:(new Date).getTime(),n=void 0!==e.nsecs?e.nsecs:_lastNSecs+1,d=c-_lastMSecs+(n-_lastNSecs)/1e4;if(d<0&&void 0===e.clockseq&&(u=u+1&16383),(d<0||c>_lastMSecs)&&void 0===e.nsecs&&(n=0),n>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");_lastMSecs=c,_lastNSecs=n,_clockseq=u;var _=(1e4*(268435455&(c+=122192928e5))+n)%4294967296;l[t++]=_>>>24&255,l[t++]=_>>>16&255,l[t++]=_>>>8&255,l[t++]=255&_;var i=c/4294967296*1e4&268435455;l[t++]=i>>>8&255,l[t++]=255&i,l[t++]=i>>>24&15|16,l[t++]=i>>>16&255,l[t++]=u>>>8|128,l[t++]=255&u;for(var v=0;v<6;++v)l[t+v]=o[v];return s||(0,_bytesToUuid.default)(l)}var _default=v1;exports.default=_default;

},{"./bytesToUuid.js":140,"./rng.js":143}],146:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _v=_interopRequireDefault(require("./v35.js")),_md=_interopRequireDefault(require("./md5.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var v3=(0,_v.default)("v3",48,_md.default),_default=v3;exports.default=_default;

},{"./md5.js":142,"./v35.js":147}],147:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=_default,exports.URL=exports.DNS=void 0;var _bytesToUuid=_interopRequireDefault(require("./bytesToUuid.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function uuidToBytes(e){var r=[];return e.replace(/[a-fA-F0-9]{2}/g,function(e){r.push(parseInt(e,16))}),r}function stringToBytes(e){e=unescape(encodeURIComponent(e));for(var r=new Array(e.length),t=0;t<e.length;t++)r[t]=e.charCodeAt(t);return r}var DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8";exports.DNS=DNS;var URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function _default(e,r,t){var a=function(e,a,o,u){var n=o&&u||0;if("string"==typeof e&&(e=stringToBytes(e)),"string"==typeof a&&(a=uuidToBytes(a)),!Array.isArray(e))throw TypeError("value must be an array of bytes");if(!Array.isArray(a)||16!==a.length)throw TypeError("namespace must be uuid string or an Array of 16 byte values");var s=t(a.concat(e));if(s[6]=15&s[6]|r,s[8]=63&s[8]|128,o)for(var i=0;i<16;++i)o[n+i]=s[i];return o||(0,_bytesToUuid.default)(s)};try{a.name=e}catch(e){}return a.DNS=DNS,a.URL=URL,a}exports.URL=URL;

},{"./bytesToUuid.js":140}],148:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _rng=_interopRequireDefault(require("./rng.js")),_bytesToUuid=_interopRequireDefault(require("./bytesToUuid.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function v4(e,r,t){var u=r&&t||0;"string"==typeof e&&(r="binary"===e?new Array(16):null,e=null);var n=(e=e||{}).random||(e.rng||_rng.default)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,r)for(var a=0;a<16;++a)r[u+a]=n[a];return r||(0,_bytesToUuid.default)(n)}var _default=v4;exports.default=_default;

},{"./bytesToUuid.js":140,"./rng.js":143}],149:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _v=_interopRequireDefault(require("./v35.js")),_sha=_interopRequireDefault(require("./sha1.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var v5=(0,_v.default)("v5",80,_sha.default),_default=v5;exports.default=_default;

},{"./sha1.js":144,"./v35.js":147}],150:[function(require,module,exports){
"use strict";(function(){exports.stripBOM=function(t){return"\ufeff"===t[0]?t.substring(1):t}}).call(void 0);

},{}],151:[function(require,module,exports){
"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}(function(){var t,o,e,r,i,n={}.hasOwnProperty;t=require("xmlbuilder"),o=require("./defaults").defaults,r=function(t){return"string"==typeof t&&(t.indexOf("&")>=0||t.indexOf(">")>=0||t.indexOf("<")>=0)},i=function(t){return"<![CDATA["+e(t)+"]]>"},e=function(t){return t.replace("]]>","]]]]><![CDATA[>")},exports.Builder=function(){function e(t){var e,r,i;for(e in this.options={},r=o[.2])n.call(r,e)&&(i=r[e],this.options[e]=i);for(e in t)n.call(t,e)&&(i=t[e],this.options[e]=i)}return e.prototype.buildObject=function(e){var s,l,a,f,p,u;return s=this.options.attrkey,l=this.options.charkey,1===Object.keys(e).length&&this.options.rootName===o[.2].rootName?e=e[p=Object.keys(e)[0]]:p=this.options.rootName,u=this,a=function(t,o){var e,f,p,c,y,h;if("object"!==_typeof(o))u.options.cdata&&r(o)?t.raw(i(o)):t.txt(o);else if(Array.isArray(o)){for(c in o)if(n.call(o,c))for(y in f=o[c])p=f[y],t=a(t.ele(y),p).up()}else for(y in o)if(n.call(o,y))if(f=o[y],y===s){if("object"===_typeof(f))for(e in f)h=f[e],t=t.att(e,h)}else if(y===l)t=u.options.cdata&&r(f)?t.raw(i(f)):t.txt(f);else if(Array.isArray(f))for(c in f)n.call(f,c)&&(t="string"==typeof(p=f[c])?u.options.cdata&&r(p)?t.ele(y).raw(i(p)).up():t.ele(y,p).up():a(t.ele(y),p).up());else"object"===_typeof(f)?t=a(t.ele(y),f).up():"string"==typeof f&&u.options.cdata&&r(f)?t=t.ele(y).raw(i(f)).up():(null==f&&(f=""),t=t.ele(y,f.toString()).up());return t},f=t.create(p,this.options.xmldec,this.options.doctype,{headless:this.options.headless,allowSurrogateChars:this.options.allowSurrogateChars}),a(f,e).end(this.options.renderOpts)},e}()}).call(void 0);

},{"./defaults":152,"xmlbuilder":188}],152:[function(require,module,exports){
"use strict";(function(){exports.defaults={.1:{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},.2:{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:"\n"},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}}}).call(void 0);

},{}],153:[function(require,module,exports){
"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}(function(){var t,r,e,s,i,n,o,a,p=function(t,r){return function(){return t.apply(r,arguments)}},h={}.hasOwnProperty;o=require("sax"),e=require("events"),t=require("./bom"),n=require("./processors"),a=require("timers").setImmediate,r=require("./defaults").defaults,s=function(t){return"object"===_typeof(t)&&null!=t&&0===Object.keys(t).length},i=function(t,r,e){var s,i;for(s=0,i=t.length;s<i;s++)r=(0,t[s])(r,e);return r},exports.Parser=function(c){function u(t){var e,s,i;if(this.parseStringPromise=p(this.parseStringPromise,this),this.parseString=p(this.parseString,this),this.reset=p(this.reset,this),this.assignOrPush=p(this.assignOrPush,this),this.processAsync=p(this.processAsync,this),!(this instanceof exports.Parser))return new exports.Parser(t);for(e in this.options={},s=r[.2])h.call(s,e)&&(i=s[e],this.options[e]=i);for(e in t)h.call(t,e)&&(i=t[e],this.options[e]=i);this.options.xmlns&&(this.options.xmlnskey=this.options.attrkey+"ns"),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(n.normalize)),this.reset()}return function(t,r){for(var e in r)h.call(r,e)&&(t[e]=r[e]);function s(){this.constructor=t}s.prototype=r.prototype,t.prototype=new s,t.__super__=r.prototype}(u,e),u.prototype.processAsync=function(){var t,r;try{return this.remaining.length<=this.options.chunkSize?(t=this.remaining,this.remaining="",this.saxParser=this.saxParser.write(t),this.saxParser.close()):(t=this.remaining.substr(0,this.options.chunkSize),this.remaining=this.remaining.substr(this.options.chunkSize,this.remaining.length),this.saxParser=this.saxParser.write(t),a(this.processAsync))}catch(t){if(r=t,!this.saxParser.errThrown)return this.saxParser.errThrown=!0,this.emit(r)}},u.prototype.assignOrPush=function(t,r,e){return r in t?(t[r]instanceof Array||(t[r]=[t[r]]),t[r].push(e)):this.options.explicitArray?t[r]=[e]:t[r]=e},u.prototype.reset=function(){var t,r,e,n,a;return this.removeAllListeners(),this.saxParser=o.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.saxParser.errThrown=!1,this.saxParser.onerror=(a=this,function(t){if(a.saxParser.resume(),!a.saxParser.errThrown)return a.saxParser.errThrown=!0,a.emit("error",t)}),this.saxParser.onend=function(t){return function(){if(!t.saxParser.ended)return t.saxParser.ended=!0,t.emit("end",t.resultObject)}}(this),this.saxParser.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null,n=[],t=this.options.attrkey,r=this.options.charkey,this.saxParser.onopentag=function(e){return function(s){var o,a,p,c,u;if((p=Object.create(null))[r]="",!e.options.ignoreAttrs)for(o in u=s.attributes)h.call(u,o)&&(t in p||e.options.mergeAttrs||(p[t]=Object.create(null)),a=e.options.attrValueProcessors?i(e.options.attrValueProcessors,s.attributes[o],o):s.attributes[o],c=e.options.attrNameProcessors?i(e.options.attrNameProcessors,o):o,e.options.mergeAttrs?e.assignOrPush(p,c,a):p[t][c]=a);return p["#name"]=e.options.tagNameProcessors?i(e.options.tagNameProcessors,s.name):s.name,e.options.xmlns&&(p[e.options.xmlnskey]={uri:s.uri,local:s.local}),n.push(p)}}(this),this.saxParser.onclosetag=function(t){return function(){var e,o,a,p,c,u,l,f,m,y;if(u=n.pop(),c=u["#name"],t.options.explicitChildren&&t.options.preserveChildrenOrder||delete u["#name"],!0===u.cdata&&(e=u.cdata,delete u.cdata),m=n[n.length-1],u[r].match(/^\s*$/)&&!e?(o=u[r],delete u[r]):(t.options.trim&&(u[r]=u[r].trim()),t.options.normalize&&(u[r]=u[r].replace(/\s{2,}/g," ").trim()),u[r]=t.options.valueProcessors?i(t.options.valueProcessors,u[r],c):u[r],1===Object.keys(u).length&&r in u&&!t.EXPLICIT_CHARKEY&&(u=u[r])),s(u)&&(u="function"==typeof t.options.emptyTag?t.options.emptyTag():""!==t.options.emptyTag?t.options.emptyTag:o),null!=t.options.validator&&(y="/"+function(){var t,r,e;for(e=[],t=0,r=n.length;t<r;t++)p=n[t],e.push(p["#name"]);return e}().concat(c).join("/"),function(){var r;try{u=t.options.validator(y,m&&m[c],u)}catch(e){return r=e,t.emit("error",r)}}()),t.options.explicitChildren&&!t.options.mergeAttrs&&"object"===_typeof(u))if(t.options.preserveChildrenOrder){if(m){for(a in m[t.options.childkey]=m[t.options.childkey]||[],l=Object.create(null),u)h.call(u,a)&&(l[a]=u[a]);m[t.options.childkey].push(l),delete u["#name"],1===Object.keys(u).length&&r in u&&!t.EXPLICIT_CHARKEY&&(u=u[r])}}else p=Object.create(null),t.options.attrkey in u&&(p[t.options.attrkey]=u[t.options.attrkey],delete u[t.options.attrkey]),!t.options.charsAsChildren&&t.options.charkey in u&&(p[t.options.charkey]=u[t.options.charkey],delete u[t.options.charkey]),Object.getOwnPropertyNames(u).length>0&&(p[t.options.childkey]=u),u=p;return n.length>0?t.assignOrPush(m,c,u):(t.options.explicitRoot&&(f=u,(u=Object.create(null))[c]=f),t.resultObject=u,t.saxParser.ended=!0,t.emit("end",t.resultObject))}}(this),e=function(t){return function(e){var s,i;if(i=n[n.length-1])return i[r]+=e,t.options.explicitChildren&&t.options.preserveChildrenOrder&&t.options.charsAsChildren&&(t.options.includeWhiteChars||""!==e.replace(/\\n/g,"").trim())&&(i[t.options.childkey]=i[t.options.childkey]||[],(s={"#name":"__text__"})[r]=e,t.options.normalize&&(s[r]=s[r].replace(/\s{2,}/g," ").trim()),i[t.options.childkey].push(s)),i}}(this),this.saxParser.ontext=e,this.saxParser.oncdata=function(t){var r;if(r=e(t))return r.cdata=!0}},u.prototype.parseString=function(r,e){var s;null!=e&&"function"==typeof e&&(this.on("end",function(t){return this.reset(),e(null,t)}),this.on("error",function(t){return this.reset(),e(t)}));try{return""===(r=r.toString()).trim()?(this.emit("end",null),!0):(r=t.stripBOM(r),this.options.async?(this.remaining=r,a(this.processAsync),this.saxParser):this.saxParser.write(r).close())}catch(t){if(s=t,!this.saxParser.errThrown&&!this.saxParser.ended)return this.emit("error",s),this.saxParser.errThrown=!0;if(this.saxParser.ended)throw s}},u.prototype.parseStringPromise=function(t){return new Promise((r=this,function(e,s){return r.parseString(t,function(t,r){return t?s(t):e(r)})}));var r},u}(),exports.parseString=function(t,r,e){var s,i;return null!=e?("function"==typeof e&&(s=e),"object"===_typeof(r)&&(i=r)):("function"==typeof r&&(s=r),i={}),new exports.Parser(i).parseString(t,s)},exports.parseStringPromise=function(t,r){var e;return"object"===_typeof(r)&&(e=r),new exports.Parser(e).parseStringPromise(t)}}).call(void 0);

},{"./bom":150,"./defaults":152,"./processors":154,"events":undefined,"sax":137,"timers":undefined}],154:[function(require,module,exports){
"use strict";(function(){var e;e=new RegExp(/(?!xmlns)^.*:/),exports.normalize=function(e){return e.toLowerCase()},exports.firstCharLowerCase=function(e){return e.charAt(0).toLowerCase()+e.slice(1)},exports.stripPrefix=function(r){return r.replace(e,"")},exports.parseNumbers=function(e){return isNaN(e)||(e=e%1==0?parseInt(e,10):parseFloat(e)),e},exports.parseBooleans=function(e){return/^(?:true|false)$/i.test(e)&&(e="true"===e.toLowerCase()),e}}).call(void 0);

},{}],155:[function(require,module,exports){
"use strict";(function(){var r,e,t,o,s={}.hasOwnProperty;e=require("./defaults"),r=require("./builder"),t=require("./parser"),o=require("./processors"),exports.defaults=e.defaults,exports.processors=o,exports.ValidationError=function(r){function e(r){this.message=r}return function(r,e){for(var t in e)s.call(e,t)&&(r[t]=e[t]);function o(){this.constructor=r}o.prototype=e.prototype,r.prototype=new o,r.__super__=e.prototype}(e,Error),e}(),exports.Builder=r.Builder,exports.Parser=t.Parser,exports.parseString=t.parseString,exports.parseStringPromise=t.parseStringPromise}).call(void 0);

},{"./builder":151,"./defaults":152,"./parser":153,"./processors":154}],156:[function(require,module,exports){
"use strict";(function(){module.exports={Disconnected:1,Preceding:2,Following:4,Contains:8,ContainedBy:16,ImplementationSpecific:32}}).call(void 0);

},{}],157:[function(require,module,exports){
"use strict";(function(){module.exports={Element:1,Attribute:2,Text:3,CData:4,EntityReference:5,EntityDeclaration:6,ProcessingInstruction:7,Comment:8,Document:9,DocType:10,DocumentFragment:11,NotationDeclaration:12,Declaration:201,Raw:202,AttributeDeclaration:203,ElementDeclaration:204,Dummy:205}}).call(void 0);

},{}],158:[function(require,module,exports){
"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}(function(){var t,o,n,r,e,u,c,i=[].slice,l={}.hasOwnProperty;t=function(){var t,o,n,r,u,c;if(c=arguments[0],u=2<=arguments.length?i.call(arguments,1):[],e(Object.assign))Object.assign.apply(null,arguments);else for(t=0,n=u.length;t<n;t++)if(null!=(r=u[t]))for(o in r)l.call(r,o)&&(c[o]=r[o]);return c},e=function(t){return!!t&&"[object Function]"===Object.prototype.toString.call(t)},u=function(t){var o;return!!t&&("function"===(o=_typeof(t))||"object"===o)},n=function(t){return e(Array.isArray)?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)},r=function(t){var o;if(n(t))return!t.length;for(o in t)if(l.call(t,o))return!1;return!0},c=function(t){var o,n;return u(t)&&(n=Object.getPrototypeOf(t))&&(o=n.constructor)&&"function"==typeof o&&o instanceof o&&Function.prototype.toString.call(o)===Function.prototype.toString.call(Object)},o=function(t){return e(t.valueOf)?t.valueOf():t},module.exports.assign=t,module.exports.isFunction=e,module.exports.isObject=u,module.exports.isArray=n,module.exports.isEmpty=r,module.exports.isPlainObject=c,module.exports.getValue=o}).call(void 0);

},{}],159:[function(require,module,exports){
"use strict";(function(){module.exports={None:0,OpenTag:1,InsideTag:2,CloseTag:3}}).call(void 0);

},{}],160:[function(require,module,exports){
"use strict";(function(){var t;t=require("./NodeType"),require("./XMLNode"),module.exports=function(){function e(e,n,r){if(this.parent=e,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),null==n)throw new Error("Missing attribute name. "+this.debugInfo(n));this.name=this.stringify.name(n),this.value=this.stringify.attValue(r),this.type=t.Attribute,this.isId=!1,this.schemaTypeInfo=null}return Object.defineProperty(e.prototype,"nodeType",{get:function(){return this.type}}),Object.defineProperty(e.prototype,"ownerElement",{get:function(){return this.parent}}),Object.defineProperty(e.prototype,"textContent",{get:function(){return this.value},set:function(t){return this.value=t||""}}),Object.defineProperty(e.prototype,"namespaceURI",{get:function(){return""}}),Object.defineProperty(e.prototype,"prefix",{get:function(){return""}}),Object.defineProperty(e.prototype,"localName",{get:function(){return this.name}}),Object.defineProperty(e.prototype,"specified",{get:function(){return!0}}),e.prototype.clone=function(){return Object.create(this)},e.prototype.toString=function(t){return this.options.writer.attribute(this,this.options.writer.filterOptions(t))},e.prototype.debugInfo=function(t){return null==(t=t||this.name)?"parent: <"+this.parent.name+">":"attribute: {"+t+"}, parent: <"+this.parent.name+">"},e.prototype.isEqualNode=function(t){return t.namespaceURI===this.namespaceURI&&(t.prefix===this.prefix&&(t.localName===this.localName&&t.value===this.value))},e}()}).call(void 0);

},{"./NodeType":157,"./XMLNode":179}],161:[function(require,module,exports){
"use strict";(function(){var t,r,o={}.hasOwnProperty;t=require("./NodeType"),r=require("./XMLCharacterData"),module.exports=function(e){function i(r,o){if(i.__super__.constructor.call(this,r),null==o)throw new Error("Missing CDATA text. "+this.debugInfo());this.name="#cdata-section",this.type=t.CData,this.value=this.stringify.cdata(o)}return function(t,r){for(var e in r)o.call(r,e)&&(t[e]=r[e]);function i(){this.constructor=t}i.prototype=r.prototype,t.prototype=new i,t.__super__=r.prototype}(i,r),i.prototype.clone=function(){return Object.create(this)},i.prototype.toString=function(t){return this.options.writer.cdata(this,this.options.writer.filterOptions(t))},i}()}).call(void 0);

},{"./NodeType":157,"./XMLCharacterData":162}],162:[function(require,module,exports){
"use strict";(function(){var t,e={}.hasOwnProperty;t=require("./XMLNode"),module.exports=function(o){function n(t){n.__super__.constructor.call(this,t),this.value=""}return function(t,o){for(var n in o)e.call(o,n)&&(t[n]=o[n]);function r(){this.constructor=t}r.prototype=o.prototype,t.prototype=new r,t.__super__=o.prototype}(n,t),Object.defineProperty(n.prototype,"data",{get:function(){return this.value},set:function(t){return this.value=t||""}}),Object.defineProperty(n.prototype,"length",{get:function(){return this.value.length}}),Object.defineProperty(n.prototype,"textContent",{get:function(){return this.value},set:function(t){return this.value=t||""}}),n.prototype.clone=function(){return Object.create(this)},n.prototype.substringData=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.appendData=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.insertData=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.deleteData=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.replaceData=function(t,e,o){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.isEqualNode=function(t){return!!n.__super__.isEqualNode.apply(this,arguments).isEqualNode(t)&&t.data===this.data},n}()}).call(void 0);

},{"./XMLNode":179}],163:[function(require,module,exports){
"use strict";(function(){var t,o,r={}.hasOwnProperty;t=require("./NodeType"),o=require("./XMLCharacterData"),module.exports=function(e){function n(o,r){if(n.__super__.constructor.call(this,o),null==r)throw new Error("Missing comment text. "+this.debugInfo());this.name="#comment",this.type=t.Comment,this.value=this.stringify.comment(r)}return function(t,o){for(var e in o)r.call(o,e)&&(t[e]=o[e]);function n(){this.constructor=t}n.prototype=o.prototype,t.prototype=new n,t.__super__=o.prototype}(n,o),n.prototype.clone=function(){return Object.create(this)},n.prototype.toString=function(t){return this.options.writer.comment(this,this.options.writer.filterOptions(t))},n}()}).call(void 0);

},{"./NodeType":157,"./XMLCharacterData":162}],164:[function(require,module,exports){
"use strict";(function(){var e,t;e=require("./XMLDOMErrorHandler"),t=require("./XMLDOMStringList"),module.exports=function(){function a(){this.defaultParams={"canonical-form":!1,"cdata-sections":!1,comments:!1,"datatype-normalization":!1,"element-content-whitespace":!0,entities:!0,"error-handler":new e,infoset:!0,"validate-if-schema":!1,namespaces:!0,"namespace-declarations":!0,"normalize-characters":!1,"schema-location":"","schema-type":"","split-cdata-sections":!0,validate:!1,"well-formed":!0},this.params=Object.create(this.defaultParams)}return Object.defineProperty(a.prototype,"parameterNames",{get:function(){return new t(Object.keys(this.defaultParams))}}),a.prototype.getParameter=function(e){return this.params.hasOwnProperty(e)?this.params[e]:null},a.prototype.canSetParameter=function(e,t){return!0},a.prototype.setParameter=function(e,t){return null!=t?this.params[e]=t:delete this.params[e]},a}()}).call(void 0);

},{"./XMLDOMErrorHandler":165,"./XMLDOMStringList":167}],165:[function(require,module,exports){
"use strict";(function(){module.exports=function(){function o(){}return o.prototype.handleError=function(o){throw new Error(o)},o}()}).call(void 0);

},{}],166:[function(require,module,exports){
"use strict";(function(){module.exports=function(){function t(){}return t.prototype.hasFeature=function(t,e){return!0},t.prototype.createDocumentType=function(t,e,o){throw new Error("This DOM method is not implemented.")},t.prototype.createDocument=function(t,e,o){throw new Error("This DOM method is not implemented.")},t.prototype.createHTMLDocument=function(t){throw new Error("This DOM method is not implemented.")},t.prototype.getFeature=function(t,e){throw new Error("This DOM method is not implemented.")},t}()}).call(void 0);

},{}],167:[function(require,module,exports){
"use strict";(function(){module.exports=function(){function t(t){this.arr=t||[]}return Object.defineProperty(t.prototype,"length",{get:function(){return this.arr.length}}),t.prototype.item=function(t){return this.arr[t]||null},t.prototype.contains=function(t){return-1!==this.arr.indexOf(t)},t}()}).call(void 0);

},{}],168:[function(require,module,exports){
"use strict";(function(){var t,e,i={}.hasOwnProperty;e=require("./XMLNode"),t=require("./NodeType"),module.exports=function(r){function o(e,i,r,n,s,u){if(o.__super__.constructor.call(this,e),null==i)throw new Error("Missing DTD element name. "+this.debugInfo());if(null==r)throw new Error("Missing DTD attribute name. "+this.debugInfo(i));if(!n)throw new Error("Missing DTD attribute type. "+this.debugInfo(i));if(!s)throw new Error("Missing DTD attribute default. "+this.debugInfo(i));if(0!==s.indexOf("#")&&(s="#"+s),!s.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. "+this.debugInfo(i));if(u&&!s.match(/^(#FIXED|#DEFAULT)$/))throw new Error("Default value only applies to #FIXED or #DEFAULT. "+this.debugInfo(i));this.elementName=this.stringify.name(i),this.type=t.AttributeDeclaration,this.attributeName=this.stringify.name(r),this.attributeType=this.stringify.dtdAttType(n),u&&(this.defaultValue=this.stringify.dtdAttDefault(u)),this.defaultValueType=s}return function(t,e){for(var r in e)i.call(e,r)&&(t[r]=e[r]);function o(){this.constructor=t}o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype}(o,e),o.prototype.toString=function(t){return this.options.writer.dtdAttList(this,this.options.writer.filterOptions(t))},o}()}).call(void 0);

},{"./NodeType":157,"./XMLNode":179}],169:[function(require,module,exports){
"use strict";(function(){var t,r,e={}.hasOwnProperty;r=require("./XMLNode"),t=require("./NodeType"),module.exports=function(i){function n(r,e,i){if(n.__super__.constructor.call(this,r),null==e)throw new Error("Missing DTD element name. "+this.debugInfo());i||(i="(#PCDATA)"),Array.isArray(i)&&(i="("+i.join(",")+")"),this.name=this.stringify.name(e),this.type=t.ElementDeclaration,this.value=this.stringify.dtdElementValue(i)}return function(t,r){for(var i in r)e.call(r,i)&&(t[i]=r[i]);function n(){this.constructor=t}n.prototype=r.prototype,t.prototype=new n,t.__super__=r.prototype}(n,r),n.prototype.toString=function(t){return this.options.writer.dtdElement(this,this.options.writer.filterOptions(t))},n}()}).call(void 0);

},{"./NodeType":157,"./XMLNode":179}],170:[function(require,module,exports){
"use strict";(function(){var t,e,i,n={}.hasOwnProperty;i=require("./Utility").isObject,e=require("./XMLNode"),t=require("./NodeType"),module.exports=function(r){function o(e,n,r,s){if(o.__super__.constructor.call(this,e),null==r)throw new Error("Missing DTD entity name. "+this.debugInfo(r));if(null==s)throw new Error("Missing DTD entity value. "+this.debugInfo(r));if(this.pe=!!n,this.name=this.stringify.name(r),this.type=t.EntityDeclaration,i(s)){if(!s.pubID&&!s.sysID)throw new Error("Public and/or system identifiers are required for an external entity. "+this.debugInfo(r));if(s.pubID&&!s.sysID)throw new Error("System identifier is required for a public external entity. "+this.debugInfo(r));if(this.internal=!1,null!=s.pubID&&(this.pubID=this.stringify.dtdPubID(s.pubID)),null!=s.sysID&&(this.sysID=this.stringify.dtdSysID(s.sysID)),null!=s.nData&&(this.nData=this.stringify.dtdNData(s.nData)),this.pe&&this.nData)throw new Error("Notation declaration is not allowed in a parameter entity. "+this.debugInfo(r))}else this.value=this.stringify.dtdEntityValue(s),this.internal=!0}return function(t,e){for(var i in e)n.call(e,i)&&(t[i]=e[i]);function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype}(o,e),Object.defineProperty(o.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(o.prototype,"systemId",{get:function(){return this.sysID}}),Object.defineProperty(o.prototype,"notationName",{get:function(){return this.nData||null}}),Object.defineProperty(o.prototype,"inputEncoding",{get:function(){return null}}),Object.defineProperty(o.prototype,"xmlEncoding",{get:function(){return null}}),Object.defineProperty(o.prototype,"xmlVersion",{get:function(){return null}}),o.prototype.toString=function(t){return this.options.writer.dtdEntity(this,this.options.writer.filterOptions(t))},o}()}).call(void 0);

},{"./NodeType":157,"./Utility":158,"./XMLNode":179}],171:[function(require,module,exports){
"use strict";(function(){var t,r,i={}.hasOwnProperty;r=require("./XMLNode"),t=require("./NodeType"),module.exports=function(e){function o(r,i,e){if(o.__super__.constructor.call(this,r),null==i)throw new Error("Missing DTD notation name. "+this.debugInfo(i));if(!e.pubID&&!e.sysID)throw new Error("Public or system identifiers are required for an external entity. "+this.debugInfo(i));this.name=this.stringify.name(i),this.type=t.NotationDeclaration,null!=e.pubID&&(this.pubID=this.stringify.dtdPubID(e.pubID)),null!=e.sysID&&(this.sysID=this.stringify.dtdSysID(e.sysID))}return function(t,r){for(var e in r)i.call(r,e)&&(t[e]=r[e]);function o(){this.constructor=t}o.prototype=r.prototype,t.prototype=new o,t.__super__=r.prototype}(o,r),Object.defineProperty(o.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(o.prototype,"systemId",{get:function(){return this.sysID}}),o.prototype.toString=function(t){return this.options.writer.dtdNotation(this,this.options.writer.filterOptions(t))},o}()}).call(void 0);

},{"./NodeType":157,"./XMLNode":179}],172:[function(require,module,exports){
"use strict";(function(){var t,i,n,o={}.hasOwnProperty;n=require("./Utility").isObject,i=require("./XMLNode"),t=require("./NodeType"),module.exports=function(r){function e(i,o,r,s){var l;e.__super__.constructor.call(this,i),n(o)&&(o=(l=o).version,r=l.encoding,s=l.standalone),o||(o="1.0"),this.type=t.Declaration,this.version=this.stringify.xmlVersion(o),null!=r&&(this.encoding=this.stringify.xmlEncoding(r)),null!=s&&(this.standalone=this.stringify.xmlStandalone(s))}return function(t,i){for(var n in i)o.call(i,n)&&(t[n]=i[n]);function r(){this.constructor=t}r.prototype=i.prototype,t.prototype=new r,t.__super__=i.prototype}(e,i),e.prototype.toString=function(t){return this.options.writer.declaration(this,this.options.writer.filterOptions(t))},e}()}).call(void 0);

},{"./NodeType":157,"./Utility":158,"./XMLNode":179}],173:[function(require,module,exports){
"use strict";(function(){var t,e,n,i,r,o,s,p,u={}.hasOwnProperty;p=require("./Utility").isObject,s=require("./XMLNode"),t=require("./NodeType"),e=require("./XMLDTDAttList"),i=require("./XMLDTDEntity"),n=require("./XMLDTDElement"),r=require("./XMLDTDNotation"),o=require("./XMLNamedNodeMap"),module.exports=function(h){function c(e,n,i){var r,o,s,u,h,y;if(c.__super__.constructor.call(this,e),this.type=t.DocType,e.children)for(o=0,s=(u=e.children).length;o<s;o++)if((r=u[o]).type===t.Element){this.name=r.name;break}this.documentObject=e,p(n)&&(n=(h=n).pubID,i=h.sysID),null==i&&(i=(y=[n,i])[0],n=y[1]),null!=n&&(this.pubID=this.stringify.dtdPubID(n)),null!=i&&(this.sysID=this.stringify.dtdSysID(i))}return function(t,e){for(var n in e)u.call(e,n)&&(t[n]=e[n]);function i(){this.constructor=t}i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype}(c,s),Object.defineProperty(c.prototype,"entities",{get:function(){var e,n,i,r,s;for(r={},n=0,i=(s=this.children).length;n<i;n++)(e=s[n]).type!==t.EntityDeclaration||e.pe||(r[e.name]=e);return new o(r)}}),Object.defineProperty(c.prototype,"notations",{get:function(){var e,n,i,r,s;for(r={},n=0,i=(s=this.children).length;n<i;n++)(e=s[n]).type===t.NotationDeclaration&&(r[e.name]=e);return new o(r)}}),Object.defineProperty(c.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(c.prototype,"systemId",{get:function(){return this.sysID}}),Object.defineProperty(c.prototype,"internalSubset",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),c.prototype.element=function(t,e){var i;return i=new n(this,t,e),this.children.push(i),this},c.prototype.attList=function(t,n,i,r,o){var s;return s=new e(this,t,n,i,r,o),this.children.push(s),this},c.prototype.entity=function(t,e){var n;return n=new i(this,!1,t,e),this.children.push(n),this},c.prototype.pEntity=function(t,e){var n;return n=new i(this,!0,t,e),this.children.push(n),this},c.prototype.notation=function(t,e){var n;return n=new r(this,t,e),this.children.push(n),this},c.prototype.toString=function(t){return this.options.writer.docType(this,this.options.writer.filterOptions(t))},c.prototype.ele=function(t,e){return this.element(t,e)},c.prototype.att=function(t,e,n,i,r){return this.attList(t,e,n,i,r)},c.prototype.ent=function(t,e){return this.entity(t,e)},c.prototype.pent=function(t,e){return this.pEntity(t,e)},c.prototype.not=function(t,e){return this.notation(t,e)},c.prototype.up=function(){return this.root()||this.documentObject},c.prototype.isEqualNode=function(t){return!!c.__super__.isEqualNode.apply(this,arguments).isEqualNode(t)&&(t.name===this.name&&(t.publicId===this.publicId&&t.systemId===this.systemId))},c}()}).call(void 0);

},{"./NodeType":157,"./Utility":158,"./XMLDTDAttList":168,"./XMLDTDElement":169,"./XMLDTDEntity":170,"./XMLDTDNotation":171,"./XMLNamedNodeMap":178,"./XMLNode":179}],174:[function(require,module,exports){
"use strict";(function(){var t,e,o,n,r,i,p,h={}.hasOwnProperty;p=require("./Utility").isPlainObject,o=require("./XMLDOMImplementation"),e=require("./XMLDOMConfiguration"),n=require("./XMLNode"),t=require("./NodeType"),i=require("./XMLStringifier"),r=require("./XMLStringWriter"),module.exports=function(s){function u(o){u.__super__.constructor.call(this,null),this.name="#document",this.type=t.Document,this.documentURI=null,this.domConfig=new e,o||(o={}),o.writer||(o.writer=new r),this.options=o,this.stringify=new i(o)}return function(t,e){for(var o in e)h.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(u,n),Object.defineProperty(u.prototype,"implementation",{value:new o}),Object.defineProperty(u.prototype,"doctype",{get:function(){var e,o,n,r;for(o=0,n=(r=this.children).length;o<n;o++)if((e=r[o]).type===t.DocType)return e;return null}}),Object.defineProperty(u.prototype,"documentElement",{get:function(){return this.rootObject||null}}),Object.defineProperty(u.prototype,"inputEncoding",{get:function(){return null}}),Object.defineProperty(u.prototype,"strictErrorChecking",{get:function(){return!1}}),Object.defineProperty(u.prototype,"xmlEncoding",{get:function(){return 0!==this.children.length&&this.children[0].type===t.Declaration?this.children[0].encoding:null}}),Object.defineProperty(u.prototype,"xmlStandalone",{get:function(){return 0!==this.children.length&&this.children[0].type===t.Declaration&&"yes"===this.children[0].standalone}}),Object.defineProperty(u.prototype,"xmlVersion",{get:function(){return 0!==this.children.length&&this.children[0].type===t.Declaration?this.children[0].version:"1.0"}}),Object.defineProperty(u.prototype,"URL",{get:function(){return this.documentURI}}),Object.defineProperty(u.prototype,"origin",{get:function(){return null}}),Object.defineProperty(u.prototype,"compatMode",{get:function(){return null}}),Object.defineProperty(u.prototype,"characterSet",{get:function(){return null}}),Object.defineProperty(u.prototype,"contentType",{get:function(){return null}}),u.prototype.end=function(t){var e;return e={},t?p(t)&&(e=t,t=this.options.writer):t=this.options.writer,t.document(this,t.filterOptions(e))},u.prototype.toString=function(t){return this.options.writer.document(this,this.options.writer.filterOptions(t))},u.prototype.createElement=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.createDocumentFragment=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.createTextNode=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.createComment=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.createCDATASection=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.createProcessingInstruction=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.createAttribute=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.createEntityReference=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.getElementsByTagName=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.importNode=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.createElementNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.createAttributeNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.getElementsByTagNameNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.getElementById=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.adoptNode=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.normalizeDocument=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.renameNode=function(t,e,o){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.getElementsByClassName=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.createEvent=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.createRange=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.createNodeIterator=function(t,e,o){throw new Error("This DOM method is not implemented."+this.debugInfo())},u.prototype.createTreeWalker=function(t,e,o){throw new Error("This DOM method is not implemented."+this.debugInfo())},u}()}).call(void 0);

},{"./NodeType":157,"./Utility":158,"./XMLDOMConfiguration":164,"./XMLDOMImplementation":166,"./XMLNode":179,"./XMLStringWriter":184,"./XMLStringifier":185}],175:[function(require,module,exports){
"use strict";(function(){var t,e,r,i,n,o,s,h,u,c,a,p,l,d,w,y,f,v,L,m,N,D,O,b={}.hasOwnProperty;O=require("./Utility"),N=O.isObject,m=O.isFunction,D=O.isPlainObject,L=O.getValue,t=require("./NodeType"),p=require("./XMLDocument"),l=require("./XMLElement"),i=require("./XMLCData"),n=require("./XMLComment"),w=require("./XMLRaw"),v=require("./XMLText"),d=require("./XMLProcessingInstruction"),c=require("./XMLDeclaration"),a=require("./XMLDocType"),o=require("./XMLDTDAttList"),h=require("./XMLDTDEntity"),s=require("./XMLDTDElement"),u=require("./XMLDTDNotation"),r=require("./XMLAttribute"),f=require("./XMLStringifier"),y=require("./XMLStringWriter"),e=require("./WriterState"),module.exports=function(){function O(e,r,i){var n;this.name="?xml",this.type=t.Document,e||(e={}),n={},e.writer?D(e.writer)&&(n=e.writer,e.writer=new y):e.writer=new y,this.options=e,this.writer=e.writer,this.writerOptions=this.writer.filterOptions(n),this.stringify=new f(e),this.onDataCallback=r||function(){},this.onEndCallback=i||function(){},this.currentNode=null,this.currentLevel=-1,this.openTags={},this.documentStarted=!1,this.documentCompleted=!1,this.root=null}return O.prototype.createChildNode=function(e){var r,i,n,o,s,h,u,c;switch(e.type){case t.CData:this.cdata(e.value);break;case t.Comment:this.comment(e.value);break;case t.Element:for(i in n={},u=e.attribs)b.call(u,i)&&(r=u[i],n[i]=r.value);this.node(e.name,n);break;case t.Dummy:this.dummy();break;case t.Raw:this.raw(e.value);break;case t.Text:this.text(e.value);break;case t.ProcessingInstruction:this.instruction(e.target,e.value);break;default:throw new Error("This XML node type is not supported in a JS object: "+e.constructor.name)}for(s=0,h=(c=e.children).length;s<h;s++)o=c[s],this.createChildNode(o),o.type===t.Element&&this.up();return this},O.prototype.dummy=function(){return this},O.prototype.node=function(t,e,r){var i;if(null==t)throw new Error("Missing node name.");if(this.root&&-1===this.currentLevel)throw new Error("Document can only have one root node. "+this.debugInfo(t));return this.openCurrent(),t=L(t),null==e&&(e={}),e=L(e),N(e)||(r=(i=[e,r])[0],e=i[1]),this.currentNode=new l(this,t,e),this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,null!=r&&this.text(r),this},O.prototype.element=function(e,r,i){var n,o,s,h,u,c;if(this.currentNode&&this.currentNode.type===t.DocType)this.dtdElement.apply(this,arguments);else if(Array.isArray(e)||N(e)||m(e))for(h=this.options.noValidation,this.options.noValidation=!0,(c=new p(this.options).element("TEMP_ROOT")).element(e),this.options.noValidation=h,o=0,s=(u=c.children).length;o<s;o++)n=u[o],this.createChildNode(n),n.type===t.Element&&this.up();else this.node(e,r,i);return this},O.prototype.attribute=function(t,e){var i,n;if(!this.currentNode||this.currentNode.children)throw new Error("att() can only be used immediately after an ele() call in callback mode. "+this.debugInfo(t));if(null!=t&&(t=L(t)),N(t))for(i in t)b.call(t,i)&&(n=t[i],this.attribute(i,n));else m(e)&&(e=e.apply()),this.options.keepNullAttributes&&null==e?this.currentNode.attribs[t]=new r(this,t,""):null!=e&&(this.currentNode.attribs[t]=new r(this,t,e));return this},O.prototype.text=function(t){var e;return this.openCurrent(),e=new v(this,t),this.onData(this.writer.text(e,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},O.prototype.cdata=function(t){var e;return this.openCurrent(),e=new i(this,t),this.onData(this.writer.cdata(e,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},O.prototype.comment=function(t){var e;return this.openCurrent(),e=new n(this,t),this.onData(this.writer.comment(e,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},O.prototype.raw=function(t){var e;return this.openCurrent(),e=new w(this,t),this.onData(this.writer.raw(e,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},O.prototype.instruction=function(t,e){var r,i,n,o,s;if(this.openCurrent(),null!=t&&(t=L(t)),null!=e&&(e=L(e)),Array.isArray(t))for(r=0,o=t.length;r<o;r++)i=t[r],this.instruction(i);else if(N(t))for(i in t)b.call(t,i)&&(n=t[i],this.instruction(i,n));else m(e)&&(e=e.apply()),s=new d(this,t,e),this.onData(this.writer.processingInstruction(s,this.writerOptions,this.currentLevel+1),this.currentLevel+1);return this},O.prototype.declaration=function(t,e,r){var i;if(this.openCurrent(),this.documentStarted)throw new Error("declaration() must be the first node.");return i=new c(this,t,e,r),this.onData(this.writer.declaration(i,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},O.prototype.doctype=function(t,e,r){if(this.openCurrent(),null==t)throw new Error("Missing root node name.");if(this.root)throw new Error("dtd() must come before the root node.");return this.currentNode=new a(this,e,r),this.currentNode.rootNodeName=t,this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,this},O.prototype.dtdElement=function(t,e){var r;return this.openCurrent(),r=new s(this,t,e),this.onData(this.writer.dtdElement(r,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},O.prototype.attList=function(t,e,r,i,n){var s;return this.openCurrent(),s=new o(this,t,e,r,i,n),this.onData(this.writer.dtdAttList(s,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},O.prototype.entity=function(t,e){var r;return this.openCurrent(),r=new h(this,!1,t,e),this.onData(this.writer.dtdEntity(r,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},O.prototype.pEntity=function(t,e){var r;return this.openCurrent(),r=new h(this,!0,t,e),this.onData(this.writer.dtdEntity(r,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},O.prototype.notation=function(t,e){var r;return this.openCurrent(),r=new u(this,t,e),this.onData(this.writer.dtdNotation(r,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},O.prototype.up=function(){if(this.currentLevel<0)throw new Error("The document node has no parent.");return this.currentNode?(this.currentNode.children?this.closeNode(this.currentNode):this.openNode(this.currentNode),this.currentNode=null):this.closeNode(this.openTags[this.currentLevel]),delete this.openTags[this.currentLevel],this.currentLevel--,this},O.prototype.end=function(){for(;this.currentLevel>=0;)this.up();return this.onEnd()},O.prototype.openCurrent=function(){if(this.currentNode)return this.currentNode.children=!0,this.openNode(this.currentNode)},O.prototype.openNode=function(r){var i,n,o,s;if(!r.isOpen){if(this.root||0!==this.currentLevel||r.type!==t.Element||(this.root=r),n="",r.type===t.Element){for(o in this.writerOptions.state=e.OpenTag,n=this.writer.indent(r,this.writerOptions,this.currentLevel)+"<"+r.name,s=r.attribs)b.call(s,o)&&(i=s[o],n+=this.writer.attribute(i,this.writerOptions,this.currentLevel));n+=(r.children?">":"/>")+this.writer.endline(r,this.writerOptions,this.currentLevel),this.writerOptions.state=e.InsideTag}else this.writerOptions.state=e.OpenTag,n=this.writer.indent(r,this.writerOptions,this.currentLevel)+"<!DOCTYPE "+r.rootNodeName,r.pubID&&r.sysID?n+=' PUBLIC "'+r.pubID+'" "'+r.sysID+'"':r.sysID&&(n+=' SYSTEM "'+r.sysID+'"'),r.children?(n+=" [",this.writerOptions.state=e.InsideTag):(this.writerOptions.state=e.CloseTag,n+=">"),n+=this.writer.endline(r,this.writerOptions,this.currentLevel);return this.onData(n,this.currentLevel),r.isOpen=!0}},O.prototype.closeNode=function(r){var i;if(!r.isClosed)return i="",this.writerOptions.state=e.CloseTag,i=r.type===t.Element?this.writer.indent(r,this.writerOptions,this.currentLevel)+"</"+r.name+">"+this.writer.endline(r,this.writerOptions,this.currentLevel):this.writer.indent(r,this.writerOptions,this.currentLevel)+"]>"+this.writer.endline(r,this.writerOptions,this.currentLevel),this.writerOptions.state=e.None,this.onData(i,this.currentLevel),r.isClosed=!0},O.prototype.onData=function(t,e){return this.documentStarted=!0,this.onDataCallback(t,e+1)},O.prototype.onEnd=function(){return this.documentCompleted=!0,this.onEndCallback()},O.prototype.debugInfo=function(t){return null==t?"":"node: <"+t+">"},O.prototype.ele=function(){return this.element.apply(this,arguments)},O.prototype.nod=function(t,e,r){return this.node(t,e,r)},O.prototype.txt=function(t){return this.text(t)},O.prototype.dat=function(t){return this.cdata(t)},O.prototype.com=function(t){return this.comment(t)},O.prototype.ins=function(t,e){return this.instruction(t,e)},O.prototype.dec=function(t,e,r){return this.declaration(t,e,r)},O.prototype.dtd=function(t,e,r){return this.doctype(t,e,r)},O.prototype.e=function(t,e,r){return this.element(t,e,r)},O.prototype.n=function(t,e,r){return this.node(t,e,r)},O.prototype.t=function(t){return this.text(t)},O.prototype.d=function(t){return this.cdata(t)},O.prototype.c=function(t){return this.comment(t)},O.prototype.r=function(t){return this.raw(t)},O.prototype.i=function(t,e){return this.instruction(t,e)},O.prototype.att=function(){return this.currentNode&&this.currentNode.type===t.DocType?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},O.prototype.a=function(){return this.currentNode&&this.currentNode.type===t.DocType?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},O.prototype.ent=function(t,e){return this.entity(t,e)},O.prototype.pent=function(t,e){return this.pEntity(t,e)},O.prototype.not=function(t,e){return this.notation(t,e)},O}()}).call(void 0);

},{"./NodeType":157,"./Utility":158,"./WriterState":159,"./XMLAttribute":160,"./XMLCData":161,"./XMLComment":163,"./XMLDTDAttList":168,"./XMLDTDElement":169,"./XMLDTDEntity":170,"./XMLDTDNotation":171,"./XMLDeclaration":172,"./XMLDocType":173,"./XMLDocument":174,"./XMLElement":177,"./XMLProcessingInstruction":181,"./XMLRaw":182,"./XMLStringWriter":184,"./XMLStringifier":185,"./XMLText":186}],176:[function(require,module,exports){
"use strict";(function(){var t,o,r={}.hasOwnProperty;o=require("./XMLNode"),t=require("./NodeType"),module.exports=function(e){function n(o){n.__super__.constructor.call(this,o),this.type=t.Dummy}return function(t,o){for(var e in o)r.call(o,e)&&(t[e]=o[e]);function n(){this.constructor=t}n.prototype=o.prototype,t.prototype=new n,t.__super__=o.prototype}(n,o),n.prototype.clone=function(){return Object.create(this)},n.prototype.toString=function(t){return""},n}()}).call(void 0);

},{"./NodeType":157,"./XMLNode":179}],177:[function(require,module,exports){
"use strict";(function(){var t,e,r,o,i,n,s,h,u={}.hasOwnProperty;h=require("./Utility"),s=h.isObject,n=h.isFunction,i=h.getValue,o=require("./XMLNode"),t=require("./NodeType"),e=require("./XMLAttribute"),r=require("./XMLNamedNodeMap"),module.exports=function(h){function p(e,r,o){var i,n,s,h;if(p.__super__.constructor.call(this,e),null==r)throw new Error("Missing element name. "+this.debugInfo());if(this.name=this.stringify.name(r),this.type=t.Element,this.attribs={},this.schemaTypeInfo=null,null!=o&&this.attribute(o),e.type===t.Document&&(this.isRoot=!0,this.documentObject=e,e.rootObject=this,e.children))for(n=0,s=(h=e.children).length;n<s;n++)if((i=h[n]).type===t.DocType){i.name=this.name;break}}return function(t,e){for(var r in e)u.call(e,r)&&(t[r]=e[r]);function o(){this.constructor=t}o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype}(p,o),Object.defineProperty(p.prototype,"tagName",{get:function(){return this.name}}),Object.defineProperty(p.prototype,"namespaceURI",{get:function(){return""}}),Object.defineProperty(p.prototype,"prefix",{get:function(){return""}}),Object.defineProperty(p.prototype,"localName",{get:function(){return this.name}}),Object.defineProperty(p.prototype,"id",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(p.prototype,"className",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(p.prototype,"classList",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(p.prototype,"attributes",{get:function(){return this.attributeMap&&this.attributeMap.nodes||(this.attributeMap=new r(this.attribs)),this.attributeMap}}),p.prototype.clone=function(){var t,e,r,o;for(e in(r=Object.create(this)).isRoot&&(r.documentObject=null),r.attribs={},o=this.attribs)u.call(o,e)&&(t=o[e],r.attribs[e]=t.clone());return r.children=[],this.children.forEach(function(t){var e;return(e=t.clone()).parent=r,r.children.push(e)}),r},p.prototype.attribute=function(t,r){var o,h;if(null!=t&&(t=i(t)),s(t))for(o in t)u.call(t,o)&&(h=t[o],this.attribute(o,h));else n(r)&&(r=r.apply()),this.options.keepNullAttributes&&null==r?this.attribs[t]=new e(this,t,""):null!=r&&(this.attribs[t]=new e(this,t,r));return this},p.prototype.removeAttribute=function(t){var e,r,o;if(null==t)throw new Error("Missing attribute name. "+this.debugInfo());if(t=i(t),Array.isArray(t))for(r=0,o=t.length;r<o;r++)e=t[r],delete this.attribs[e];else delete this.attribs[t];return this},p.prototype.toString=function(t){return this.options.writer.element(this,this.options.writer.filterOptions(t))},p.prototype.att=function(t,e){return this.attribute(t,e)},p.prototype.a=function(t,e){return this.attribute(t,e)},p.prototype.getAttribute=function(t){return this.attribs.hasOwnProperty(t)?this.attribs[t].value:null},p.prototype.setAttribute=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.getAttributeNode=function(t){return this.attribs.hasOwnProperty(t)?this.attribs[t]:null},p.prototype.setAttributeNode=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.removeAttributeNode=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.getElementsByTagName=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.getAttributeNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.setAttributeNS=function(t,e,r){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.removeAttributeNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.getAttributeNodeNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.setAttributeNodeNS=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.getElementsByTagNameNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.hasAttribute=function(t){return this.attribs.hasOwnProperty(t)},p.prototype.hasAttributeNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.setIdAttribute=function(t,e){return this.attribs.hasOwnProperty(t)?this.attribs[t].isId:e},p.prototype.setIdAttributeNS=function(t,e,r){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.setIdAttributeNode=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.getElementsByTagName=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.getElementsByTagNameNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.getElementsByClassName=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.isEqualNode=function(t){var e,r,o;if(!p.__super__.isEqualNode.apply(this,arguments).isEqualNode(t))return!1;if(t.namespaceURI!==this.namespaceURI)return!1;if(t.prefix!==this.prefix)return!1;if(t.localName!==this.localName)return!1;if(t.attribs.length!==this.attribs.length)return!1;for(e=r=0,o=this.attribs.length-1;0<=o?r<=o:r>=o;e=0<=o?++r:--r)if(!this.attribs[e].isEqualNode(t.attribs[e]))return!1;return!0},p}()}).call(void 0);

},{"./NodeType":157,"./Utility":158,"./XMLAttribute":160,"./XMLNamedNodeMap":178,"./XMLNode":179}],178:[function(require,module,exports){
"use strict";(function(){module.exports=function(){function e(e){this.nodes=e}return Object.defineProperty(e.prototype,"length",{get:function(){return Object.keys(this.nodes).length||0}}),e.prototype.clone=function(){return this.nodes=null},e.prototype.getNamedItem=function(e){return this.nodes[e]},e.prototype.setNamedItem=function(e){var t;return t=this.nodes[e.nodeName],this.nodes[e.nodeName]=e,t||null},e.prototype.removeNamedItem=function(e){var t;return t=this.nodes[e],delete this.nodes[e],t||null},e.prototype.item=function(e){return this.nodes[Object.keys(this.nodes)[e]]||null},e.prototype.getNamedItemNS=function(e,t){throw new Error("This DOM method is not implemented.")},e.prototype.setNamedItemNS=function(e){throw new Error("This DOM method is not implemented.")},e.prototype.removeNamedItemNS=function(e,t){throw new Error("This DOM method is not implemented.")},e}()}).call(void 0);

},{}],179:[function(require,module,exports){
"use strict";(function(){var t,e,n,r,i,o,s,h,p,u,c,l,d,a,f,y,m,g={}.hasOwnProperty;m=require("./Utility"),y=m.isObject,f=m.isFunction,a=m.isEmpty,d=m.getValue,h=null,n=null,r=null,i=null,o=null,c=null,l=null,u=null,s=null,e=null,p=null,t=null,module.exports=function(){function m(d){this.parent=d,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),this.value=null,this.children=[],this.baseURI=null,h||(h=require("./XMLElement"),n=require("./XMLCData"),r=require("./XMLComment"),i=require("./XMLDeclaration"),o=require("./XMLDocType"),c=require("./XMLRaw"),l=require("./XMLText"),u=require("./XMLProcessingInstruction"),s=require("./XMLDummy"),e=require("./NodeType"),p=require("./XMLNodeList"),require("./XMLNamedNodeMap"),t=require("./DocumentPosition"))}return Object.defineProperty(m.prototype,"nodeName",{get:function(){return this.name}}),Object.defineProperty(m.prototype,"nodeType",{get:function(){return this.type}}),Object.defineProperty(m.prototype,"nodeValue",{get:function(){return this.value}}),Object.defineProperty(m.prototype,"parentNode",{get:function(){return this.parent}}),Object.defineProperty(m.prototype,"childNodes",{get:function(){return this.childNodeList&&this.childNodeList.nodes||(this.childNodeList=new p(this.children)),this.childNodeList}}),Object.defineProperty(m.prototype,"firstChild",{get:function(){return this.children[0]||null}}),Object.defineProperty(m.prototype,"lastChild",{get:function(){return this.children[this.children.length-1]||null}}),Object.defineProperty(m.prototype,"previousSibling",{get:function(){var t;return t=this.parent.children.indexOf(this),this.parent.children[t-1]||null}}),Object.defineProperty(m.prototype,"nextSibling",{get:function(){var t;return t=this.parent.children.indexOf(this),this.parent.children[t+1]||null}}),Object.defineProperty(m.prototype,"ownerDocument",{get:function(){return this.document()||null}}),Object.defineProperty(m.prototype,"textContent",{get:function(){var t,n,r,i,o;if(this.nodeType===e.Element||this.nodeType===e.DocumentFragment){for(o="",n=0,r=(i=this.children).length;n<r;n++)(t=i[n]).textContent&&(o+=t.textContent);return o}return null},set:function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),m.prototype.setParent=function(t){var e,n,r,i,o;for(this.parent=t,t&&(this.options=t.options,this.stringify=t.stringify),o=[],n=0,r=(i=this.children).length;n<r;n++)e=i[n],o.push(e.setParent(this));return o},m.prototype.element=function(t,e,n){var r,i,o,s,h,p,u,c,l,m,v;if(p=null,null===e&&null==n&&(e=(l=[{},null])[0],n=l[1]),null==e&&(e={}),e=d(e),y(e)||(n=(m=[e,n])[0],e=m[1]),null!=t&&(t=d(t)),Array.isArray(t))for(o=0,u=t.length;o<u;o++)i=t[o],p=this.element(i);else if(f(t))p=this.element(t.apply());else if(y(t)){for(h in t)if(g.call(t,h))if(v=t[h],f(v)&&(v=v.apply()),!this.options.ignoreDecorators&&this.stringify.convertAttKey&&0===h.indexOf(this.stringify.convertAttKey))p=this.attribute(h.substr(this.stringify.convertAttKey.length),v);else if(!this.options.separateArrayItems&&Array.isArray(v)&&a(v))p=this.dummy();else if(y(v)&&a(v))p=this.element(h);else if(this.options.keepNullNodes||null!=v)if(!this.options.separateArrayItems&&Array.isArray(v))for(s=0,c=v.length;s<c;s++)i=v[s],(r={})[h]=i,p=this.element(r);else y(v)?!this.options.ignoreDecorators&&this.stringify.convertTextKey&&0===h.indexOf(this.stringify.convertTextKey)?p=this.element(v):(p=this.element(h)).element(v):p=this.element(h,v);else p=this.dummy()}else p=this.options.keepNullNodes||null!==n?!this.options.ignoreDecorators&&this.stringify.convertTextKey&&0===t.indexOf(this.stringify.convertTextKey)?this.text(n):!this.options.ignoreDecorators&&this.stringify.convertCDataKey&&0===t.indexOf(this.stringify.convertCDataKey)?this.cdata(n):!this.options.ignoreDecorators&&this.stringify.convertCommentKey&&0===t.indexOf(this.stringify.convertCommentKey)?this.comment(n):!this.options.ignoreDecorators&&this.stringify.convertRawKey&&0===t.indexOf(this.stringify.convertRawKey)?this.raw(n):!this.options.ignoreDecorators&&this.stringify.convertPIKey&&0===t.indexOf(this.stringify.convertPIKey)?this.instruction(t.substr(this.stringify.convertPIKey.length),n):this.node(t,e,n):this.dummy();if(null==p)throw new Error("Could not create any elements with: "+t+". "+this.debugInfo());return p},m.prototype.insertBefore=function(t,e,n){var r,i,o,s,h;if(null!=t?t.type:void 0)return s=e,(o=t).setParent(this),s?(i=children.indexOf(s),h=children.splice(i),children.push(o),Array.prototype.push.apply(children,h)):children.push(o),o;if(this.isRoot)throw new Error("Cannot insert elements at root level. "+this.debugInfo(t));return i=this.parent.children.indexOf(this),h=this.parent.children.splice(i),r=this.parent.element(t,e,n),Array.prototype.push.apply(this.parent.children,h),r},m.prototype.insertAfter=function(t,e,n){var r,i,o;if(this.isRoot)throw new Error("Cannot insert elements at root level. "+this.debugInfo(t));return i=this.parent.children.indexOf(this),o=this.parent.children.splice(i+1),r=this.parent.element(t,e,n),Array.prototype.push.apply(this.parent.children,o),r},m.prototype.remove=function(){var t;if(this.isRoot)throw new Error("Cannot remove the root element. "+this.debugInfo());return t=this.parent.children.indexOf(this),[].splice.apply(this.parent.children,[t,t-t+1].concat([])),this.parent},m.prototype.node=function(t,e,n){var r,i;return null!=t&&(t=d(t)),e||(e={}),e=d(e),y(e)||(n=(i=[e,n])[0],e=i[1]),r=new h(this,t,e),null!=n&&r.text(n),this.children.push(r),r},m.prototype.text=function(t){var e;return y(t)&&this.element(t),e=new l(this,t),this.children.push(e),this},m.prototype.cdata=function(t){var e;return e=new n(this,t),this.children.push(e),this},m.prototype.comment=function(t){var e;return e=new r(this,t),this.children.push(e),this},m.prototype.commentBefore=function(t){var e,n;return e=this.parent.children.indexOf(this),n=this.parent.children.splice(e),this.parent.comment(t),Array.prototype.push.apply(this.parent.children,n),this},m.prototype.commentAfter=function(t){var e,n;return e=this.parent.children.indexOf(this),n=this.parent.children.splice(e+1),this.parent.comment(t),Array.prototype.push.apply(this.parent.children,n),this},m.prototype.raw=function(t){var e;return e=new c(this,t),this.children.push(e),this},m.prototype.dummy=function(){return new s(this)},m.prototype.instruction=function(t,e){var n,r,i,o,s;if(null!=t&&(t=d(t)),null!=e&&(e=d(e)),Array.isArray(t))for(o=0,s=t.length;o<s;o++)n=t[o],this.instruction(n);else if(y(t))for(n in t)g.call(t,n)&&(r=t[n],this.instruction(n,r));else f(e)&&(e=e.apply()),i=new u(this,t,e),this.children.push(i);return this},m.prototype.instructionBefore=function(t,e){var n,r;return n=this.parent.children.indexOf(this),r=this.parent.children.splice(n),this.parent.instruction(t,e),Array.prototype.push.apply(this.parent.children,r),this},m.prototype.instructionAfter=function(t,e){var n,r;return n=this.parent.children.indexOf(this),r=this.parent.children.splice(n+1),this.parent.instruction(t,e),Array.prototype.push.apply(this.parent.children,r),this},m.prototype.declaration=function(t,n,r){var o,s;return o=this.document(),s=new i(o,t,n,r),0===o.children.length?o.children.unshift(s):o.children[0].type===e.Declaration?o.children[0]=s:o.children.unshift(s),o.root()||o},m.prototype.dtd=function(t,n){var r,i,s,h,p,u,c,l,d;for(r=this.document(),i=new o(r,t,n),s=h=0,u=(l=r.children).length;h<u;s=++h)if(l[s].type===e.DocType)return r.children[s]=i,i;for(s=p=0,c=(d=r.children).length;p<c;s=++p)if(d[s].isRoot)return r.children.splice(s,0,i),i;return r.children.push(i),i},m.prototype.up=function(){if(this.isRoot)throw new Error("The root node has no parent. Use doc() if you need to get the document object.");return this.parent},m.prototype.root=function(){var t;for(t=this;t;){if(t.type===e.Document)return t.rootObject;if(t.isRoot)return t;t=t.parent}},m.prototype.document=function(){var t;for(t=this;t;){if(t.type===e.Document)return t;t=t.parent}},m.prototype.end=function(t){return this.document().end(t)},m.prototype.prev=function(){var t;if((t=this.parent.children.indexOf(this))<1)throw new Error("Already at the first node. "+this.debugInfo());return this.parent.children[t-1]},m.prototype.next=function(){var t;if(-1===(t=this.parent.children.indexOf(this))||t===this.parent.children.length-1)throw new Error("Already at the last node. "+this.debugInfo());return this.parent.children[t+1]},m.prototype.importDocument=function(t){var e;return(e=t.root().clone()).parent=this,e.isRoot=!1,this.children.push(e),this},m.prototype.debugInfo=function(t){var e,n;return null!=(t=t||this.name)||(null!=(e=this.parent)?e.name:void 0)?null==t?"parent: <"+this.parent.name+">":(null!=(n=this.parent)?n.name:void 0)?"node: <"+t+">, parent: <"+this.parent.name+">":"node: <"+t+">":""},m.prototype.ele=function(t,e,n){return this.element(t,e,n)},m.prototype.nod=function(t,e,n){return this.node(t,e,n)},m.prototype.txt=function(t){return this.text(t)},m.prototype.dat=function(t){return this.cdata(t)},m.prototype.com=function(t){return this.comment(t)},m.prototype.ins=function(t,e){return this.instruction(t,e)},m.prototype.doc=function(){return this.document()},m.prototype.dec=function(t,e,n){return this.declaration(t,e,n)},m.prototype.e=function(t,e,n){return this.element(t,e,n)},m.prototype.n=function(t,e,n){return this.node(t,e,n)},m.prototype.t=function(t){return this.text(t)},m.prototype.d=function(t){return this.cdata(t)},m.prototype.c=function(t){return this.comment(t)},m.prototype.r=function(t){return this.raw(t)},m.prototype.i=function(t,e){return this.instruction(t,e)},m.prototype.u=function(){return this.up()},m.prototype.importXMLBuilder=function(t){return this.importDocument(t)},m.prototype.replaceChild=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},m.prototype.removeChild=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},m.prototype.appendChild=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},m.prototype.hasChildNodes=function(){return 0!==this.children.length},m.prototype.cloneNode=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},m.prototype.normalize=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},m.prototype.isSupported=function(t,e){return!0},m.prototype.hasAttributes=function(){return 0!==this.attribs.length},m.prototype.compareDocumentPosition=function(e){var n;return this,this===e?0:this.document()!==e.document()?(n=t.Disconnected|t.ImplementationSpecific,Math.random()<.5?n|=t.Preceding:n|=t.Following,n):this.isAncestor(e)?t.Contains|t.Preceding:this.isDescendant(e)?t.Contains|t.Following:this.isPreceding(e)?t.Preceding:t.Following},m.prototype.isSameNode=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},m.prototype.lookupPrefix=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},m.prototype.isDefaultNamespace=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},m.prototype.lookupNamespaceURI=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},m.prototype.isEqualNode=function(t){var e,n,r;if(t.nodeType!==this.nodeType)return!1;if(t.children.length!==this.children.length)return!1;for(e=n=0,r=this.children.length-1;0<=r?n<=r:n>=r;e=0<=r?++n:--n)if(!this.children[e].isEqualNode(t.children[e]))return!1;return!0},m.prototype.getFeature=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},m.prototype.setUserData=function(t,e,n){throw new Error("This DOM method is not implemented."+this.debugInfo())},m.prototype.getUserData=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},m.prototype.contains=function(t){return!!t&&(t===this||this.isDescendant(t))},m.prototype.isDescendant=function(t){var e,n,r,i;for(n=0,r=(i=this.children).length;n<r;n++){if(t===(e=i[n]))return!0;if(e.isDescendant(t))return!0}return!1},m.prototype.isAncestor=function(t){return t.isDescendant(this)},m.prototype.isPreceding=function(t){var e,n;return e=this.treePosition(t),n=this.treePosition(this),-1!==e&&-1!==n&&e<n},m.prototype.isFollowing=function(t){var e,n;return e=this.treePosition(t),n=this.treePosition(this),-1!==e&&-1!==n&&e>n},m.prototype.treePosition=function(t){var e,n;return n=0,e=!1,this.foreachTreeNode(this.document(),function(r){if(n++,!e&&r===t)return e=!0}),e?n:-1},m.prototype.foreachTreeNode=function(t,e){var n,r,i,o,s;for(t||(t=this.document()),r=0,i=(o=t.children).length;r<i;r++){if(s=e(n=o[r]))return s;if(s=this.foreachTreeNode(n,e))return s}},m}()}).call(void 0);

},{"./DocumentPosition":156,"./NodeType":157,"./Utility":158,"./XMLCData":161,"./XMLComment":163,"./XMLDeclaration":172,"./XMLDocType":173,"./XMLDummy":176,"./XMLElement":177,"./XMLNamedNodeMap":178,"./XMLNodeList":180,"./XMLProcessingInstruction":181,"./XMLRaw":182,"./XMLText":186}],180:[function(require,module,exports){
"use strict";(function(){module.exports=function(){function t(t){this.nodes=t}return Object.defineProperty(t.prototype,"length",{get:function(){return this.nodes.length||0}}),t.prototype.clone=function(){return this.nodes=null},t.prototype.item=function(t){return this.nodes[t]||null},t}()}).call(void 0);

},{}],181:[function(require,module,exports){
"use strict";(function(){var t,r,i={}.hasOwnProperty;t=require("./NodeType"),r=require("./XMLCharacterData"),module.exports=function(e){function o(r,i,e){if(o.__super__.constructor.call(this,r),null==i)throw new Error("Missing instruction target. "+this.debugInfo());this.type=t.ProcessingInstruction,this.target=this.stringify.insTarget(i),this.name=this.target,e&&(this.value=this.stringify.insValue(e))}return function(t,r){for(var e in r)i.call(r,e)&&(t[e]=r[e]);function o(){this.constructor=t}o.prototype=r.prototype,t.prototype=new o,t.__super__=r.prototype}(o,r),o.prototype.clone=function(){return Object.create(this)},o.prototype.toString=function(t){return this.options.writer.processingInstruction(this,this.options.writer.filterOptions(t))},o.prototype.isEqualNode=function(t){return!!o.__super__.isEqualNode.apply(this,arguments).isEqualNode(t)&&t.target===this.target},o}()}).call(void 0);

},{"./NodeType":157,"./XMLCharacterData":162}],182:[function(require,module,exports){
"use strict";(function(){var t,r,o={}.hasOwnProperty;t=require("./NodeType"),r=require("./XMLNode"),module.exports=function(e){function i(r,o){if(i.__super__.constructor.call(this,r),null==o)throw new Error("Missing raw text. "+this.debugInfo());this.type=t.Raw,this.value=this.stringify.raw(o)}return function(t,r){for(var e in r)o.call(r,e)&&(t[e]=r[e]);function i(){this.constructor=t}i.prototype=r.prototype,t.prototype=new i,t.__super__=r.prototype}(i,r),i.prototype.clone=function(){return Object.create(this)},i.prototype.toString=function(t){return this.options.writer.raw(this,this.options.writer.filterOptions(t))},i}()}).call(void 0);

},{"./NodeType":157,"./XMLNode":179}],183:[function(require,module,exports){
"use strict";(function(){var t,e,r,s={}.hasOwnProperty;t=require("./NodeType"),r=require("./XMLWriterBase"),e=require("./WriterState"),module.exports=function(i){function n(t,e){this.stream=t,n.__super__.constructor.call(this,e)}return function(t,e){for(var r in e)s.call(e,r)&&(t[r]=e[r]);function i(){this.constructor=t}i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype}(n,r),n.prototype.endline=function(t,r,s){return t.isLastRootNode&&r.state===e.CloseTag?"":n.__super__.endline.call(this,t,r,s)},n.prototype.document=function(t,e){var r,s,i,n,o,a,l,h,p;for(s=i=0,o=(l=t.children).length;i<o;s=++i)(r=l[s]).isLastRootNode=s===t.children.length-1;for(e=this.filterOptions(e),p=[],n=0,a=(h=t.children).length;n<a;n++)r=h[n],p.push(this.writeChildNode(r,e,0));return p},n.prototype.attribute=function(t,e,r){return this.stream.write(n.__super__.attribute.call(this,t,e,r))},n.prototype.cdata=function(t,e,r){return this.stream.write(n.__super__.cdata.call(this,t,e,r))},n.prototype.comment=function(t,e,r){return this.stream.write(n.__super__.comment.call(this,t,e,r))},n.prototype.declaration=function(t,e,r){return this.stream.write(n.__super__.declaration.call(this,t,e,r))},n.prototype.docType=function(t,r,s){var i,n,o,a;if(s||(s=0),this.openNode(t,r,s),r.state=e.OpenTag,this.stream.write(this.indent(t,r,s)),this.stream.write("<!DOCTYPE "+t.root().name),t.pubID&&t.sysID?this.stream.write(' PUBLIC "'+t.pubID+'" "'+t.sysID+'"'):t.sysID&&this.stream.write(' SYSTEM "'+t.sysID+'"'),t.children.length>0){for(this.stream.write(" ["),this.stream.write(this.endline(t,r,s)),r.state=e.InsideTag,n=0,o=(a=t.children).length;n<o;n++)i=a[n],this.writeChildNode(i,r,s+1);r.state=e.CloseTag,this.stream.write("]")}return r.state=e.CloseTag,this.stream.write(r.spaceBeforeSlash+">"),this.stream.write(this.endline(t,r,s)),r.state=e.None,this.closeNode(t,r,s)},n.prototype.element=function(r,i,n){var o,a,l,h,p,u,c,d,_;for(c in n||(n=0),this.openNode(r,i,n),i.state=e.OpenTag,this.stream.write(this.indent(r,i,n)+"<"+r.name),d=r.attribs)s.call(d,c)&&(o=d[c],this.attribute(o,i,n));if(h=0===(l=r.children.length)?null:r.children[0],0===l||r.children.every(function(e){return(e.type===t.Text||e.type===t.Raw)&&""===e.value}))i.allowEmpty?(this.stream.write(">"),i.state=e.CloseTag,this.stream.write("</"+r.name+">")):(i.state=e.CloseTag,this.stream.write(i.spaceBeforeSlash+"/>"));else if(!i.pretty||1!==l||h.type!==t.Text&&h.type!==t.Raw||null==h.value){for(this.stream.write(">"+this.endline(r,i,n)),i.state=e.InsideTag,p=0,u=(_=r.children).length;p<u;p++)a=_[p],this.writeChildNode(a,i,n+1);i.state=e.CloseTag,this.stream.write(this.indent(r,i,n)+"</"+r.name+">")}else this.stream.write(">"),i.state=e.InsideTag,i.suppressPrettyCount++,!0,this.writeChildNode(h,i,n+1),i.suppressPrettyCount--,!1,i.state=e.CloseTag,this.stream.write("</"+r.name+">");return this.stream.write(this.endline(r,i,n)),i.state=e.None,this.closeNode(r,i,n)},n.prototype.processingInstruction=function(t,e,r){return this.stream.write(n.__super__.processingInstruction.call(this,t,e,r))},n.prototype.raw=function(t,e,r){return this.stream.write(n.__super__.raw.call(this,t,e,r))},n.prototype.text=function(t,e,r){return this.stream.write(n.__super__.text.call(this,t,e,r))},n.prototype.dtdAttList=function(t,e,r){return this.stream.write(n.__super__.dtdAttList.call(this,t,e,r))},n.prototype.dtdElement=function(t,e,r){return this.stream.write(n.__super__.dtdElement.call(this,t,e,r))},n.prototype.dtdEntity=function(t,e,r){return this.stream.write(n.__super__.dtdEntity.call(this,t,e,r))},n.prototype.dtdNotation=function(t,e,r){return this.stream.write(n.__super__.dtdNotation.call(this,t,e,r))},n}()}).call(void 0);

},{"./NodeType":157,"./WriterState":159,"./XMLWriterBase":187}],184:[function(require,module,exports){
"use strict";(function(){var t,e={}.hasOwnProperty;t=require("./XMLWriterBase"),module.exports=function(r){function n(t){n.__super__.constructor.call(this,t)}return function(t,r){for(var n in r)e.call(r,n)&&(t[n]=r[n]);function o(){this.constructor=t}o.prototype=r.prototype,t.prototype=new o,t.__super__=r.prototype}(n,t),n.prototype.document=function(t,e){var r,n,o,i,c;for(e=this.filterOptions(e),i="",n=0,o=(c=t.children).length;n<o;n++)r=c[n],i+=this.writeChildNode(r,e,0);return e.pretty&&i.slice(-e.newline.length)===e.newline&&(i=i.slice(0,-e.newline.length)),i},n}()}).call(void 0);

},{"./XMLWriterBase":187}],185:[function(require,module,exports){
"use strict";(function(){var t=function(t,o){return function(){return t.apply(o,arguments)}},o={}.hasOwnProperty;module.exports=function(){function n(n){var r,i,e;for(r in this.assertLegalName=t(this.assertLegalName,this),this.assertLegalChar=t(this.assertLegalChar,this),n||(n={}),this.options=n,this.options.version||(this.options.version="1.0"),i=n.stringify||{})o.call(i,r)&&(e=i[r],this[r]=e)}return n.prototype.name=function(t){return this.options.noValidation?t:this.assertLegalName(""+t||"")},n.prototype.text=function(t){return this.options.noValidation?t:this.assertLegalChar(this.textEscape(""+t||""))},n.prototype.cdata=function(t){return this.options.noValidation?t:(t=(t=""+t||"").replace("]]>","]]]]><![CDATA[>"),this.assertLegalChar(t))},n.prototype.comment=function(t){if(this.options.noValidation)return t;if((t=""+t||"").match(/--/))throw new Error("Comment text cannot contain double-hypen: "+t);return this.assertLegalChar(t)},n.prototype.raw=function(t){return this.options.noValidation?t:""+t||""},n.prototype.attValue=function(t){return this.options.noValidation?t:this.assertLegalChar(this.attEscape(t=""+t||""))},n.prototype.insTarget=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},n.prototype.insValue=function(t){if(this.options.noValidation)return t;if((t=""+t||"").match(/\?>/))throw new Error("Invalid processing instruction value: "+t);return this.assertLegalChar(t)},n.prototype.xmlVersion=function(t){if(this.options.noValidation)return t;if(!(t=""+t||"").match(/1\.[0-9]+/))throw new Error("Invalid version number: "+t);return t},n.prototype.xmlEncoding=function(t){if(this.options.noValidation)return t;if(!(t=""+t||"").match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/))throw new Error("Invalid encoding: "+t);return this.assertLegalChar(t)},n.prototype.xmlStandalone=function(t){return this.options.noValidation?t:t?"yes":"no"},n.prototype.dtdPubID=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},n.prototype.dtdSysID=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},n.prototype.dtdElementValue=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},n.prototype.dtdAttType=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},n.prototype.dtdAttDefault=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},n.prototype.dtdEntityValue=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},n.prototype.dtdNData=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},n.prototype.convertAttKey="@",n.prototype.convertPIKey="?",n.prototype.convertTextKey="#text",n.prototype.convertCDataKey="#cdata",n.prototype.convertCommentKey="#comment",n.prototype.convertRawKey="#raw",n.prototype.assertLegalChar=function(t){var o,n;if(this.options.noValidation)return t;if(o="","1.0"===this.options.version){if(o=/[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,n=t.match(o))throw new Error("Invalid character in string: "+t+" at index "+n.index)}else if("1.1"===this.options.version&&(o=/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,n=t.match(o)))throw new Error("Invalid character in string: "+t+" at index "+n.index);return t},n.prototype.assertLegalName=function(t){var o;if(this.options.noValidation)return t;if(this.assertLegalChar(t),o=/^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/,!t.match(o))throw new Error("Invalid character in name");return t},n.prototype.textEscape=function(t){var o;return this.options.noValidation?t:(o=this.options.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,t.replace(o,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r/g,"&#xD;"))},n.prototype.attEscape=function(t){var o;return this.options.noValidation?t:(o=this.options.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,t.replace(o,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/\t/g,"&#x9;").replace(/\n/g,"&#xA;").replace(/\r/g,"&#xD;"))},n}()}).call(void 0);

},{}],186:[function(require,module,exports){
"use strict";(function(){var t,e,o={}.hasOwnProperty;t=require("./NodeType"),e=require("./XMLCharacterData"),module.exports=function(r){function i(e,o){if(i.__super__.constructor.call(this,e),null==o)throw new Error("Missing element text. "+this.debugInfo());this.name="#text",this.type=t.Text,this.value=this.stringify.text(o)}return function(t,e){for(var r in e)o.call(e,r)&&(t[r]=e[r]);function i(){this.constructor=t}i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype}(i,e),Object.defineProperty(i.prototype,"isElementContentWhitespace",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(i.prototype,"wholeText",{get:function(){var t,e,o;for(o="",e=this.previousSibling;e;)o=e.data+o,e=e.previousSibling;for(o+=this.data,t=this.nextSibling;t;)o+=t.data,t=t.nextSibling;return o}}),i.prototype.clone=function(){return Object.create(this)},i.prototype.toString=function(t){return this.options.writer.text(this,this.options.writer.filterOptions(t))},i.prototype.splitText=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.replaceWholeText=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},i}()}).call(void 0);

},{"./NodeType":157,"./XMLCharacterData":162}],187:[function(require,module,exports){
"use strict";(function(){var e,t,n,s={}.hasOwnProperty;n=require("./Utility").assign,e=require("./NodeType"),require("./XMLDeclaration"),require("./XMLDocType"),require("./XMLCData"),require("./XMLComment"),require("./XMLElement"),require("./XMLRaw"),require("./XMLText"),require("./XMLProcessingInstruction"),require("./XMLDummy"),require("./XMLDTDAttList"),require("./XMLDTDElement"),require("./XMLDTDEntity"),require("./XMLDTDNotation"),t=require("./WriterState"),module.exports=function(){function o(e){var t,n,o;for(t in e||(e={}),this.options=e,n=e.writer||{})s.call(n,t)&&(o=n[t],this["_"+t]=this[t],this[t]=o)}return o.prototype.filterOptions=function(e){var s,o,i,a,r,l,u,p;return e||(e={}),e=n({},this.options,e),(s={writer:this}).pretty=e.pretty||!1,s.allowEmpty=e.allowEmpty||!1,s.indent=null!=(o=e.indent)?o:"  ",s.newline=null!=(i=e.newline)?i:"\n",s.offset=null!=(a=e.offset)?a:0,s.dontPrettyTextNodes=null!=(r=null!=(l=e.dontPrettyTextNodes)?l:e.dontprettytextnodes)?r:0,s.spaceBeforeSlash=null!=(u=null!=(p=e.spaceBeforeSlash)?p:e.spacebeforeslash)?u:"",!0===s.spaceBeforeSlash&&(s.spaceBeforeSlash=" "),s.suppressPrettyCount=0,s.user={},s.state=t.None,s},o.prototype.indent=function(e,t,n){var s;return!t.pretty||t.suppressPrettyCount?"":t.pretty&&(s=(n||0)+t.offset+1)>0?new Array(s).join(t.indent):""},o.prototype.endline=function(e,t,n){return!t.pretty||t.suppressPrettyCount?"":t.newline},o.prototype.attribute=function(e,t,n){var s;return this.openAttribute(e,t,n),s=" "+e.name+'="'+e.value+'"',this.closeAttribute(e,t,n),s},o.prototype.cdata=function(e,n,s){var o;return this.openNode(e,n,s),n.state=t.OpenTag,o=this.indent(e,n,s)+"<![CDATA[",n.state=t.InsideTag,o+=e.value,n.state=t.CloseTag,o+="]]>"+this.endline(e,n,s),n.state=t.None,this.closeNode(e,n,s),o},o.prototype.comment=function(e,n,s){var o;return this.openNode(e,n,s),n.state=t.OpenTag,o=this.indent(e,n,s)+"\x3c!-- ",n.state=t.InsideTag,o+=e.value,n.state=t.CloseTag,o+=" --\x3e"+this.endline(e,n,s),n.state=t.None,this.closeNode(e,n,s),o},o.prototype.declaration=function(e,n,s){var o;return this.openNode(e,n,s),n.state=t.OpenTag,o=this.indent(e,n,s)+"<?xml",n.state=t.InsideTag,o+=' version="'+e.version+'"',null!=e.encoding&&(o+=' encoding="'+e.encoding+'"'),null!=e.standalone&&(o+=' standalone="'+e.standalone+'"'),n.state=t.CloseTag,o+=n.spaceBeforeSlash+"?>",o+=this.endline(e,n,s),n.state=t.None,this.closeNode(e,n,s),o},o.prototype.docType=function(e,n,s){var o,i,a,r,l;if(s||(s=0),this.openNode(e,n,s),n.state=t.OpenTag,r=this.indent(e,n,s),r+="<!DOCTYPE "+e.root().name,e.pubID&&e.sysID?r+=' PUBLIC "'+e.pubID+'" "'+e.sysID+'"':e.sysID&&(r+=' SYSTEM "'+e.sysID+'"'),e.children.length>0){for(r+=" [",r+=this.endline(e,n,s),n.state=t.InsideTag,i=0,a=(l=e.children).length;i<a;i++)o=l[i],r+=this.writeChildNode(o,n,s+1);n.state=t.CloseTag,r+="]"}return n.state=t.CloseTag,r+=n.spaceBeforeSlash+">",r+=this.endline(e,n,s),n.state=t.None,this.closeNode(e,n,s),r},o.prototype.element=function(n,o,i){var a,r,l,u,p,d,h,c,y,T,f,N,g,D;for(y in i||(i=0),T=!1,f="",this.openNode(n,o,i),o.state=t.OpenTag,f+=this.indent(n,o,i)+"<"+n.name,N=n.attribs)s.call(N,y)&&(a=N[y],f+=this.attribute(a,o,i));if(u=0===(l=n.children.length)?null:n.children[0],0===l||n.children.every(function(t){return(t.type===e.Text||t.type===e.Raw)&&""===t.value}))o.allowEmpty?(f+=">",o.state=t.CloseTag,f+="</"+n.name+">"+this.endline(n,o,i)):(o.state=t.CloseTag,f+=o.spaceBeforeSlash+"/>"+this.endline(n,o,i));else if(!o.pretty||1!==l||u.type!==e.Text&&u.type!==e.Raw||null==u.value){if(o.dontPrettyTextNodes)for(p=0,h=(g=n.children).length;p<h;p++)if(((r=g[p]).type===e.Text||r.type===e.Raw)&&null!=r.value){o.suppressPrettyCount++,T=!0;break}for(f+=">"+this.endline(n,o,i),o.state=t.InsideTag,d=0,c=(D=n.children).length;d<c;d++)r=D[d],f+=this.writeChildNode(r,o,i+1);o.state=t.CloseTag,f+=this.indent(n,o,i)+"</"+n.name+">",T&&o.suppressPrettyCount--,f+=this.endline(n,o,i),o.state=t.None}else f+=">",o.state=t.InsideTag,o.suppressPrettyCount++,T=!0,f+=this.writeChildNode(u,o,i+1),o.suppressPrettyCount--,T=!1,o.state=t.CloseTag,f+="</"+n.name+">"+this.endline(n,o,i);return this.closeNode(n,o,i),f},o.prototype.writeChildNode=function(t,n,s){switch(t.type){case e.CData:return this.cdata(t,n,s);case e.Comment:return this.comment(t,n,s);case e.Element:return this.element(t,n,s);case e.Raw:return this.raw(t,n,s);case e.Text:return this.text(t,n,s);case e.ProcessingInstruction:return this.processingInstruction(t,n,s);case e.Dummy:return"";case e.Declaration:return this.declaration(t,n,s);case e.DocType:return this.docType(t,n,s);case e.AttributeDeclaration:return this.dtdAttList(t,n,s);case e.ElementDeclaration:return this.dtdElement(t,n,s);case e.EntityDeclaration:return this.dtdEntity(t,n,s);case e.NotationDeclaration:return this.dtdNotation(t,n,s);default:throw new Error("Unknown XML node type: "+t.constructor.name)}},o.prototype.processingInstruction=function(e,n,s){var o;return this.openNode(e,n,s),n.state=t.OpenTag,o=this.indent(e,n,s)+"<?",n.state=t.InsideTag,o+=e.target,e.value&&(o+=" "+e.value),n.state=t.CloseTag,o+=n.spaceBeforeSlash+"?>",o+=this.endline(e,n,s),n.state=t.None,this.closeNode(e,n,s),o},o.prototype.raw=function(e,n,s){var o;return this.openNode(e,n,s),n.state=t.OpenTag,o=this.indent(e,n,s),n.state=t.InsideTag,o+=e.value,n.state=t.CloseTag,o+=this.endline(e,n,s),n.state=t.None,this.closeNode(e,n,s),o},o.prototype.text=function(e,n,s){var o;return this.openNode(e,n,s),n.state=t.OpenTag,o=this.indent(e,n,s),n.state=t.InsideTag,o+=e.value,n.state=t.CloseTag,o+=this.endline(e,n,s),n.state=t.None,this.closeNode(e,n,s),o},o.prototype.dtdAttList=function(e,n,s){var o;return this.openNode(e,n,s),n.state=t.OpenTag,o=this.indent(e,n,s)+"<!ATTLIST",n.state=t.InsideTag,o+=" "+e.elementName+" "+e.attributeName+" "+e.attributeType,"#DEFAULT"!==e.defaultValueType&&(o+=" "+e.defaultValueType),e.defaultValue&&(o+=' "'+e.defaultValue+'"'),n.state=t.CloseTag,o+=n.spaceBeforeSlash+">"+this.endline(e,n,s),n.state=t.None,this.closeNode(e,n,s),o},o.prototype.dtdElement=function(e,n,s){var o;return this.openNode(e,n,s),n.state=t.OpenTag,o=this.indent(e,n,s)+"<!ELEMENT",n.state=t.InsideTag,o+=" "+e.name+" "+e.value,n.state=t.CloseTag,o+=n.spaceBeforeSlash+">"+this.endline(e,n,s),n.state=t.None,this.closeNode(e,n,s),o},o.prototype.dtdEntity=function(e,n,s){var o;return this.openNode(e,n,s),n.state=t.OpenTag,o=this.indent(e,n,s)+"<!ENTITY",n.state=t.InsideTag,e.pe&&(o+=" %"),o+=" "+e.name,e.value?o+=' "'+e.value+'"':(e.pubID&&e.sysID?o+=' PUBLIC "'+e.pubID+'" "'+e.sysID+'"':e.sysID&&(o+=' SYSTEM "'+e.sysID+'"'),e.nData&&(o+=" NDATA "+e.nData)),n.state=t.CloseTag,o+=n.spaceBeforeSlash+">"+this.endline(e,n,s),n.state=t.None,this.closeNode(e,n,s),o},o.prototype.dtdNotation=function(e,n,s){var o;return this.openNode(e,n,s),n.state=t.OpenTag,o=this.indent(e,n,s)+"<!NOTATION",n.state=t.InsideTag,o+=" "+e.name,e.pubID&&e.sysID?o+=' PUBLIC "'+e.pubID+'" "'+e.sysID+'"':e.pubID?o+=' PUBLIC "'+e.pubID+'"':e.sysID&&(o+=' SYSTEM "'+e.sysID+'"'),n.state=t.CloseTag,o+=n.spaceBeforeSlash+">"+this.endline(e,n,s),n.state=t.None,this.closeNode(e,n,s),o},o.prototype.openNode=function(e,t,n){},o.prototype.closeNode=function(e,t,n){},o.prototype.openAttribute=function(e,t,n){},o.prototype.closeAttribute=function(e,t,n){},o}()}).call(void 0);

},{"./NodeType":157,"./Utility":158,"./WriterState":159,"./XMLCData":161,"./XMLComment":163,"./XMLDTDAttList":168,"./XMLDTDElement":169,"./XMLDTDEntity":170,"./XMLDTDNotation":171,"./XMLDeclaration":172,"./XMLDocType":173,"./XMLDummy":176,"./XMLElement":177,"./XMLProcessingInstruction":181,"./XMLRaw":182,"./XMLText":186}],188:[function(require,module,exports){
"use strict";(function(){var e,r,t,n,i,o,u,l,s,m;m=require("./Utility"),l=m.assign,s=m.isFunction,t=require("./XMLDOMImplementation"),n=require("./XMLDocument"),i=require("./XMLDocumentCB"),u=require("./XMLStringWriter"),o=require("./XMLStreamWriter"),e=require("./NodeType"),r=require("./WriterState"),module.exports.create=function(e,r,t,i){var o,u;if(null==e)throw new Error("Root element needs a name.");return i=l({},r,t,i),u=(o=new n(i)).element(e),i.headless||(o.declaration(i),null==i.pubID&&null==i.sysID||o.dtd(i)),u},module.exports.begin=function(e,r,t){var o;return s(e)&&(r=(o=[e,r])[0],t=o[1],e={}),r?new i(e,r,t):new n(e)},module.exports.stringWriter=function(e){return new u(e)},module.exports.streamWriter=function(e,r){return new o(e,r)},module.exports.implementation=new t,module.exports.nodeType=e,module.exports.writerState=r}).call(void 0);

},{"./NodeType":157,"./Utility":158,"./WriterState":159,"./XMLDOMImplementation":166,"./XMLDocument":174,"./XMLDocumentCB":175,"./XMLStreamWriter":183,"./XMLStringWriter":184}]},{},[1]);
