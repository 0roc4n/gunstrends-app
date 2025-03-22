// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';
import { Stack, router } from 'expo-router';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleLogin = () => {
    if (!email || !password) {
      // Show error alert
      Alert.alert(
        "Login Failed",
        "Please enter both email and password",
        [{ text: "OK" }]
      );
      return;
    }
    
    // Show success alert and navigate after alert is dismissed
    Alert.alert(
      "Login Successful",
      "Welcome back!",
      [
        { 
          text: "Continue", 
          onPress: () => {
            // Navigate to tabs index
            router.replace('/(tabs)/index');
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-slate-900`}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw`flex-1`}
      >
        <ScrollView contentContainerStyle={tw`flex-grow`}>
          <View style={tw`flex-1 p-6 justify-between`}>
            {/* Header with Logo */}
            <View style={tw`items-center mt-10`}>
              {/* Replace with your actual logo or comment this out if you don't have one yet */}
              <View style={tw`w-24 h-24 bg-slate-800 rounded-full items-center justify-center`}>
                <Text style={tw`text-white text-xl`}>G&T</Text>
              </View>
              <Text style={tw`text-white text-3xl font-bold mt-4`}>GunsN'Trends</Text>
              <Text style={tw`text-slate-400 text-base mt-2`}>Premium Firearms & Ammunition</Text>
            </View>

            {/* Login Form */}
            <View style={tw`mt-10`}>
              <Text style={tw`text-white text-2xl font-bold mb-6`}>Sign In</Text>
              
              <View style={tw`mb-4`}>
                <Text style={tw`text-slate-300 mb-2`}>Email</Text>
                <TextInput
                  style={tw`bg-slate-800 p-4 rounded-lg text-white`}
                  placeholder="Enter your email"
                  placeholderTextColor="#9CA3AF"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={tw`mb-6`}>
                <Text style={tw`text-slate-300 mb-2`}>Password</Text>
                <View style={tw`flex-row bg-slate-800 rounded-lg`}>
                  <TextInput
                    style={tw`flex-1 p-4 text-white`}
                    placeholder="Enter your password"
                    placeholderTextColor="#9CA3AF"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={secureTextEntry}
                  />
                  <TouchableOpacity 
                    style={tw`justify-center px-4`}
                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                  >
                    <Text style={tw`text-slate-400`}>
                      {secureTextEntry ? 'Show' : 'Hide'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={tw`flex-row justify-between mb-6`}>
                <TouchableOpacity 
                  style={tw`flex-row items-center`}
                  onPress={() => setRememberMe(!rememberMe)}
                >
                  <View style={tw`w-5 h-5 mr-2 border rounded ${rememberMe ? 'bg-blue-500 border-blue-500' : 'border-slate-400'}`}>
                    {rememberMe && (
                      <Text style={tw`text-white text-xs text-center`}>✓</Text>
                    )}
                  </View>
                  <Text style={tw`text-slate-300`}>Remember me</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                  <Text style={tw`text-blue-500`}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity 
                style={tw`bg-blue-600 p-4 rounded-lg items-center mb-4`}
                onPress={handleLogin}
              >
                <Text style={tw`text-white font-bold text-lg`}>Sign In</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={tw`bg-slate-800 p-4 rounded-lg items-center border border-slate-700`}
              >
                <Text style={tw`text-white font-bold text-lg`}>Sign in with Apple ID</Text>
              </TouchableOpacity>
            </View>

            {/* Footer */}
            <View style={tw`mt-8 mb-6 items-center`}>
              <View style={tw`flex-row`}>
                <Text style={tw`text-slate-400`}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => router.push('/signup')}>
                  <Text style={tw`text-blue-500 font-semibold`}>Create Account</Text>
                </TouchableOpacity>
              </View>
              
              <Text style={tw`text-slate-500 mt-4 text-center`}>
                By signing in, you agree to our Terms of Service and Privacy Policy
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}