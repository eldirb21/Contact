# CONTACT APP

# Running App

if you Run this app follow this action :

## IOS

- ios/Pods && ios/Podfile.lock => remove that if you find error
- cd ios && pod install --repo-update
- npm run ios

## ANDROID

- android/node_modules && android/package-lock.json => remove that if you find error
- cd android && ./gradlew clean
- npm run android

# Test App

if you test this app follow this action :

- Open your terminal current project
- npm run test => for test all test case
- npm run tes name_folder => for test all file in some folder in project
- npm run tes name_folder/name_file.js => for test some file in some folder in project

Notes : You cannot test all folders/all files, if you want to know which folders/files can be tested check in the _test_ folder or add your files and test cases there
