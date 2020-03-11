# REACT NATIVE CASE OPENER

## Install

Guide: https://reactnative.dev/docs/getting-started
Kör React Native CLI Quickstart


### Android
We recommend installing Node and Python2 via Chocolatey, a popular package manager for Windows.

React Native also requires a recent version of the Java SE Development Kit (JDK), as well as Python 2. Both can be installed using Chocolatey.

Open an Administrator Command Prompt (right click Command Prompt and select "Run as Administrator"), then run the following command:
```
choco install -y nodejs.install python2 jdk8
```

1. Install Android Studio

2. Install the Android SDK

3. Configure the ANDROID_HOME environment variable

4. Add platform-tools to Path


#### Run Application
```
npx react-native run-android
```
### IOS
```
cd /ios
pod install
cd ..
npx react-native run-ios
```