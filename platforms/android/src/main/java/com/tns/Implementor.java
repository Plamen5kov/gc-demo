package com.tns;

import android.os.Handler;
import android.os.Looper;
import android.util.Log;

public class Implementor implements CallbackInterface{
    public String getMessage() {
        return "Hello from Class1 instance";
    }
}
