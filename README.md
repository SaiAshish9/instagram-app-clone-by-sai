## Configuration Step's :

```
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools

OR

local.properties -> sdk.dir = /home/saiashish9/Android/Sdk

Android Studio -> tools -> Sdk Manager -> Version 29

OR

build.gradle -> version 31

```

## Killing existing process

```
lsof -i tcp:8081
kill -9 9645
```

## Configuring App Icon

```
Android Studio -> res -> New -> Image Asset -> Backgroud Width -> 0%
```

## Configuring Splash Screen

```
res -> drawable

bg_splash.xml

<?xml version="1.0" encoding="utf-8"?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
    <item>
        <color android:color="@android:color/white" />
    </item>
    <item>
        <bitmap
            android:src="@drawable/splash"
            android:gravity="center"
            />
    </item>

</layer-list>

splash.png

res -> values -> styles.xml


<style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <!-- Customize your theme here. -->
        <item name="android:textColor">#000000</item>
        <item name="android:statusBarColor" tools:targetApi="lollipop">#fff</item>
        <item name="android:windowLightStatusBar" tools:targetApi="m">true</item>
</style>

<style name="Splash" parent="Theme.AppCompat.DayNight.NoActionBar">
        <item name="android:windowBackground">
            @drawable/bg_splash
        </item>
        <item name="android:statusBarColor" tools:targetApi="lollipop">#f0f0f0</item>
        <item name="android:windowLightStatusBar" tools:targetApi="m">true</item>
</style>

SplashScreen.java

  @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        startActivity(new Intent(this,MainActivity.class));
        finish();
}

AndroidManifest.xml

<activity
            android:name=".MainActivity"
            android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"
            android:exported="true"
            android:label="@string/app_name"
            android:launchMode="singleTask"
            android:screenOrientation="portrait"
            android:windowSoftInputMode="adjustResize"></activity>

 <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />


        <activity
            android:name=".SplashScreen"
            android:theme="@style/Splash">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>


```

## Vector Icons

```
npm i react-native-vector-icons
react-native link
```

## Custom Fonts

```
Grand-Hotel

package.json

"rnpm": {
    "assets": [
      "./assets/fonts"
    ]
  },

react-native link

npm run android

fontFamily:'GrandHotel-Regular'

> 0.60

react-native.config.js

module.exports = {
    assets: ['./assets/fonts']
};

```
