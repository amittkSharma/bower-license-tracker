# bower-license-tracker
bower-license-tracker will track all the bower dependencies and their corrosponding licenses.
The module will generate the JSON file with all meta information about bower packages and copy corrosponding license files in a directory named "bower_licenses". This new folder will be created under the same project directory.


## Updates
| Date				      | Author			      | Description							|
| ----------------- | ----------------- | ----------- |
| 2017-10-09		  	| AmittK		        | Module to track bower dependencies with all meta information and license files. |

## Installing via Npm

```
npm install -g bower-license-tracker
```

## Usage
- Install the module using: npm install -g bower-license-tracker
- On command line, execute the command: bower-tracker "Path to bower.json"



## Example of license JSON so produced by app
{
	"license": {
		"path": "C:\\Workspace\\projects\\sample-project\\src\\client",
		"packages": {
			"angular-ui-router:0.3.1": {
				"package name": "angular-ui-router",
				"licenses": "MIT",
				"download url": "No Repo/Homepage Url found",
				"license file": "C:\\Workspace\\projects\\sample-project\\src\\client\\bower_components\\angular-ui-router\\LICENSE",
				"publisher": "No Repo",
				"description": "No Description Found",
				"programming language": "JavaScript",
				"package version": "0.3.1",
				"publisher contact information": "No Repo/Homepage Url found"
			},
      "extended-datetimepicker:0.1.0": {
        "package name": "extended-datetimepicker",
        "licenses": "MIT",
        "download url": "https://github.com/amittkSharma/extended-datetimepicker",
        "license file": "C:\\Workspace\\projects\\sample-project\\src\\client\\bower_components\\extended-datetimepicker\\LICENSE",
        "publisher": "amittkSharma",
        "description": "Basic date time picker with ability to disable set of continuous or non-continuous date sets.",
        "programming language": "JavaScript",
        "package version": "0.1.0",
        "publisher contact information": "https://github.com/amittkSharma/extended-datetimepicker"
      }
    }
  }
}
