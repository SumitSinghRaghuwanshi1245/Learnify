import CommonForm from "@/components/common-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInFormControls, signUpFormControls } from "@/config";
import { AuthContext } from "@/context/auth-context";

import { useContext, useState, useEffect, useRef } from "react";

import "./app.css";
import gsap from "gsap";
import { SparklesCore } from "@/components/ui/sparkles";

function AuthPage() {
  const mainRef = useRef(null);
  const [activeTab, setActiveTab] = useState("signin");
  const {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser,
    handleLoginUser,
  } = useContext(AuthContext);

  useEffect(() => {
    // Fade in animation when component mounts
    gsap.fromTo(
      mainRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      }
    );
  }, []);

  function handleTabChange(value) {
    setActiveTab(value);
  }

  function checkIfSignInFormIsValid() {
    return (
      signInFormData &&
      signInFormData.userEmail !== "" &&
      signInFormData.password !== ""
    );
  }

  function checkIfSignUpFormIsValid() {
    return (
      signUpFormData &&
      signUpFormData.userName !== "" &&
      signUpFormData.userEmail !== "" &&
      signUpFormData.password !== ""
    );
  }

  console.log(signInFormData);

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <main
        ref={mainRef}
        className="relative container mx-auto px-4 flex items-center justify-center opacity-0"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <div className="w-full max-w-md">
          <Tabs
            value={activeTab}
            defaultValue="signin"
            onValueChange={handleTabChange}
            className="relative backdrop-blur-md rounded-2xl shadow-2xl border border-zinc-800/50"
          >
            <TabsList className="w-full p-1.5 bg-zinc-900/50 backdrop-blur-sm rounded-t-xl grid grid-cols-2 gap-2">
              <TabsTrigger
                value="signin"
                className="data-[state=active]:bg-white data-[state=active]:text-black rounded-xl transition-all duration-300 text-zinc-400 hover:text-zinc-200 py-2.5"
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="data-[state=active]:bg-white data-[state=active]:text-black rounded-xl transition-all duration-300 text-zinc-400 hover:text-zinc-200 py-2.5"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <Card className="border-0 shadow-none bg-zinc-900/20 backdrop-blur-sm">
                <CardHeader className="space-y-1 px-6 pt-6">
                  <CardTitle className="text-3xl font-bold text-white">
                    Welcome back
                  </CardTitle>
                  <CardDescription className="text-zinc-400 text-base">
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <CommonForm
                    formControls={signInFormControls}
                    buttonText={"Sign In"}
                    formData={signInFormData}
                    setFormData={setSignInFormData}
                    isButtonDisabled={!checkIfSignInFormIsValid()}
                    handleSubmit={handleLoginUser}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="signup">
              <Card className="border-0 shadow-none bg-zinc-900/20 backdrop-blur-sm">
                <CardHeader className="space-y-1 px-6 pt-6">
                  <CardTitle className="text-3xl font-bold text-white">
                    Create account
                  </CardTitle>
                  <CardDescription className="text-zinc-400 text-base">
                    Join us today and start your learning journey
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <CommonForm
                    formControls={signUpFormControls}
                    buttonText={"Sign Up"}
                    formData={signUpFormData}
                    setFormData={setSignUpFormData}
                    isButtonDisabled={!checkIfSignUpFormIsValid()}
                    handleSubmit={handleRegisterUser}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default AuthPage;
