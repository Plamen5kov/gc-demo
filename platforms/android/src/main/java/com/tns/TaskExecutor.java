package com.tns;

import android.os.Handler;
import android.os.Looper;
import android.util.Log;

public class TaskExecutor {

    public static void printMessageWithDelay(final CallbackInterface cb, final long delay) {
        Log.d("TestApp", "printMessageWithDelay 1");
        Handler mainThreadHandler = new Handler(Looper.getMainLooper());

        Runnable r = new Runnable() {
            @Override
            public void run() {
                String s = cb.getMessage();
                Log.d("TestApp", "printMessgeWithDelay=" + s);
            }
        };

        mainThreadHandler.postDelayed(r, delay);
    }

    public static void printMessageWithTimerDelay(final CallbackInterface cb, final long delay) {
        Log.d("TestApp", "printMessageWithTimerDelay 2");
        Handler mainThreadHandler = new Handler(Looper.getMainLooper());

        new java.util.Timer().schedule(new java.util.TimerTask() {
            @Override
            public void run() {
                String s = cb.getMessage();
                Log.d("TestApp", "printMessgeWithDelay=" + s);
            }
        }, delay);
    }

    public static void printMessageNormal(CallbackInterface cb, final long delay) {
        Log.d("TestApp", "printMessageNormal 3");
        String s = cb.getMessage();
        Log.d("TestApp", "printMessge=" + s);
    }
}
