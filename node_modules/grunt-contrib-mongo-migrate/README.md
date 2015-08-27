grunt-contrib-mongo-migrate
==========================
[![Build Status](https://travis-ci.org/olaurendeau/grunt-contrib-mongo-migrate.svg?branch=v1.0.1)](https://travis-ci.org/olaurendeau/grunt-contrib-mongo-migrate)

Provide grunt integration for mongo-migrate node module

Installation
------------

```
npm install grunt-contrib-mongo-migrate
```

Configuration
------------

Add the followings to your Gruntfile.js
```
grunt.initConfig({
        "mongo-migrate": {
            create: "",
            up: "",
            down: "",
            options: {
                config: "config.json",
                dbPropName: "mongo"
            }
        }
    });
```

```
grunt.loadNpmTasks('grunt-contrib-mongo-migrate');
```

Usage
-----

Create a migration

```
grunt mongo-migrate:create --name <name of migration>
```

Running the above task will create a migration folder and a file named 001-<name of migration>.js. Running this migration
is as simple as
```
grunt mongo-migrate:up
```

migration:up without an argument will run all migration files to the HEAD. You can also optionally specify a specific
migration to use as a ceiling.
```
grunt mongo-migrate:up --name 002-somefile.js
```

Specifying an argument means that it will stop when it reaches that file.

If you want to migrate down the syntax is the same
```
grunt mongo-migrate:down --name 001-somefile.js
```


=====================================================================
This plugin is strongly inspirated by https://github.com/travism/grunt-migrate

This plugin is using https://github.com/afloyd/mongo-migrate
