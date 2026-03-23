'use client';

import { apiList, callGet, callPost } from '@/axios/api';
import { getToken } from '@/lib/auth';
import { Modal } from '@/ui';
import { usePathname, useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [reload, setReload] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [userStatus, setUserStatus] = useState('');
  const [verified, setVerified] = useState(false);

  const fecthUserInfo = () => {
    if (getToken()) {
      callGet(`${apiList.user}/info`).then((res) => {
        if (res?.status) {
          setUserInfo(res.data);
        }
      });
    }
  };

  const fetchUserStatus = () => {
    if (getToken()) {
      // callGet(`${apiList.user}/status`).then((res) => {
      //   if (res?.status) {
      //     setUserStatus(res.data.status);
      //   }
      // });
    }
  };

  const fetchUserVerification = () => {
    if (getToken()) {
      // callGet(`${apiList.user}/verification`).then((res) => {
      //   if (res?.status) {
      //     setVerified(res?.data);
      //   }
      // });
    }
  };

  const activeWelcomeFree = async (setIsLoading, gotoDashboard = false) => {
    let gotoURL = '/package-info';

    const payRes = await callGet(`${apiList.payment}/list`);

    if (payRes?.items?.length === 0) {
      gotoURL = '/settings';
    }

    callPost(`${apiList.payment}/welcome`, {}, true).then((res) => {
      if (res?.code === '0000') {
        Modal.confirm({
          content: 'Таны урамшууллын багц идэвхэжлээ',
          yesText: 'Ойлголоо',
          hiddenNoButton: true,
          yesOnClick: (id) => {
            fetchUserStatus();

            setIsLoading(true);
            router.push(gotoURL);

            Modal.hide(id);
            Modal.hide('UNPAID_ERROR_MODAL');
          },
        });
      } else {
        Modal.error({
          content: res.msg[0],
          yesText: 'Ойлголоо',
          hiddenNoButton: true,
          yesOnClick: (id) => {
            gotoDashboard && router.push('/dashboard');

            Modal.hide(id);
          },
        });
      }

      setIsLoading(false);
    });
  };

  useEffect(() => {
    fecthUserInfo();
    fetchUserStatus();
    fetchUserVerification();
  }, [pathname]);

  return (
    <MainContext.Provider
      value={{
        reload,
        userInfo,
        userStatus,
        verified,
        setReload,
        fecthUserInfo,
        fetchUserStatus,
        activeWelcomeFree,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
