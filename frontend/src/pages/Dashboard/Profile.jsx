import React, { useContext, useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useUserAuth } from "../../hooks/useUserAuth";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import toast from "react-hot-toast";
import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector";
import uploadImage from "../../utils/uploadImage";
import Input from "../../components/inputs/Input";
import { AuthContext } from "../../context/AuthContext";
import { validatePassword } from "../../utils/helper";

const Profile = () => {
  useUserAuth();

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const [profilePic, setProfilePic] = useState(null);
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const { updateUser, token } = useContext(AuthContext);

  const fetchUserInfo = async () => {
    try {
      const res = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO);
      setFullName(res.data.fullName);
      setProfilePic(res.data.profileImageUrl);
      console.log(res.data);
    } catch (error) {
      toast.error("Failed to fetch user info");
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";
    if (!fullName) {
      toast.error("Please enter your full name");
      return;
    }

    // API CALL
    try {
      // Upload profile picture if provided
      if (profilePic) {
        const imgUploadRes = await uploadImage(profilePic);
        profileImageUrl = imgUploadRes.imageUrl || "";
      }

      const response = await axiosInstance.put(API_PATHS.AUTH.UPDATE_PROFILE, {
        fullName,
        profileImageUrl,
      });
      const { newUser } = response.data;
      // if (token) {
      updateUser(token, newUser);
      // navigate("/profile");
      // }
      toast.success("Profile updated successfully");
      fetchUserInfo();
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    }
  };

  const updatePassword = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      toast.error(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
      return;
    }

    try {
      await axiosInstance.put(API_PATHS.AUTH.CHANGE_PASSWORD, {
        password,
      });
      toast.success("Password updated successfully");
      setPassword("");
    } catch (error) {
      console.error("Failed to update password:", error);
      toast.error("Failed to update password");
    }
  };

  return (
    <DashboardLayout activeMenu="Profile">
      {/* <div className="my-5 mx-auto"> */}
      <div className="max-w-xl mx-auto p-4 space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <div className="card">
            <div className="flex justify-between items-center">
              <div>
                <h5 className="text-lg">Update Profile</h5>
                <p className="text-xs text-gray-400 mt-0.5">
                  Update your profile information and settings.
                </p>
              </div>
            </div>
            <form onSubmit={handleProfileUpdate}>
              <ProfilePhotoSelector
                image={profilePic}
                setImage={setProfilePic}
              />

              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                label="Full Name"
                placeholder="Full Name"
                type="text"
              />

              <button type="submit" className="btn-primary">
                Update Profile
              </button>
            </form>
          </div>

          <div className="card">
            <div className="flex justify-between items-center">
              <div>
                <h5 className="text-lg">Reset Password</h5>
              </div>
            </div>
            <form onSubmit={updatePassword}>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="New Password"
                placeholder="New Password"
                type="text"
              />

              <button type="submit" className="btn-primary">
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;

// FIX REMOVING PROFILE PICTURE
