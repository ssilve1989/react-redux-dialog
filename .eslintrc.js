module.exports = {
	"parser"       : "babel-eslint",
	"env"          : {
		"browser" : true,
		"commonjs": true,
		"es6"     : true
	},
	"extends"      : "eslint:recommended",
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx"                         : true
		},
		"sourceType"  : "module"
	},
	"plugins"      : [
		"react"
	],
	"rules"        : {
		"react/jsx-uses-react"    : 2,
		"react/react-in-jsx-scope": 2,
		"react/jsx-uses-vars"     : 2,
		"indent"                  : [
			"warn",
			"tab",
		],
		"linebreak-style"         : [
			"error",
			"unix"
		],
		"quotes"                  : [
			"warn",
			"single"
		],
		"semi"                    : [
			"warn",
			"never"
		]
	}
};