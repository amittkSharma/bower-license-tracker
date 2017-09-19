# bower-license-tracker
bower-license-tracker will track all the bower dependencies and their corrosponding licenses.
The module will generate the JSON file with all meta information about bower packages and copy corrosponding license files in a directory named "bower_licenses". This new folder will be created under the same project directory.

#Features
<ul>
  <li>Creation of JSON file with meta information about licenses</li>
  <li>Copying license files</li>
  <li>Creation of CSV file with meta information for Audit purpose</li>
</ul>



## Updates
| Date				      | Author			      | Description							|
| ----------------- | ----------------- | ----------- |
| 2017-09-19		  	| AmittK		        | Capability to generate the CSV files |
| 2017-09-09		  	| AmittK		        | Module to track bower dependencies with all meta information and license files. |

## Installing via Npm

```
npm install -g bower-license-tracker
```

## Usage
- Install the module using: npm install -g bower-license-tracker
- On command line, execute the command: bower-tracker "Path to bower.json"
- To generate CSV, execute the command: bower-tracker "Path to bower.json" true || false <em>default value is false </em>



## Example of license JSON so produced by app
![Alt text](https://github.com/amittkSharma/bower-license-tracker/blob/master/images/packages_metainformation.png?raw=true "bower packages meta information")

