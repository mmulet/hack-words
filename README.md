# Hack-words

This is a fun little game I thought of while playing around with some
        cool math called [compressed sensing](https://en.wikipedia.org/wiki/Compressed_sensing).
Check it out at [hack-words.com](https://hack-words.com)

## Structure of the hack-words repository
hack-words

- client is the source for the website
- dev_server is the source for the development server of the website
- create_model. Source for the python model creation script

## Build

### create_model

1. Make a venv
```sh
python3 -m venv venv
# activate the venv ( depends on your shell and OS)
# see https://docs.python.org/3/library/venv.html
# bash
source venv/bin/activate
```
2. Install dependencies
```sh
pip install torch ptwt pillow numpy
```
3. generate the models and data
From the project root
```sh
python ./create_model/generate_all_data.py
```

### Website

#### Build the website

```sh
cd client
npm install .
cd ../dev_server
npm install .
npm run build
```

#### Dev the website

```sh
cd client
npm install .
cd ../dev_server
npm install .
npm run build
```
