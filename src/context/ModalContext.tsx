import React, { createContext, useContext, useState } from 'react';
import { Modal } from '../components/Modal';
import { DemoForm } from '../components/DemoForm';
import { SalesForm } from '../components/SalesForm';
import { ApplicationForm } from '../components/ApplicationForm';
import { RecruitmentForm } from '../components/RecruitmentForm';

type ModalType = 'demo' | 'sales' | 'apply' | 'recruitment' | 'video' | null;

interface ModalContextType {
  openDemoModal: () => void;
  openSalesModal: () => void;
  openApplyModal: () => void;
  openRecruitmentModal: () => void;
  openVideoModal: (url: string, title: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [videoData, setVideoData] = useState<{ url: string; title: string } | null>(null);

  const openDemoModal = () => setActiveModal('demo');
  const openSalesModal = () => setActiveModal('sales');
  const openApplyModal = () => setActiveModal('apply');
  const openRecruitmentModal = () => setActiveModal('recruitment');
  const openVideoModal = (url: string, title: string) => {
    setVideoData({ url, title });
    setActiveModal('video');
  };
  const closeModal = () => {
    setActiveModal(null);
    setVideoData(null);
  };

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      return url.replace('watch?v=', 'embed/').split('&')[0];
    }
    if (url.includes('youtu.be/')) {
      return url.replace('youtu.be/', 'youtube.com/embed/').split('?')[0];
    }
    return url;
  };

  return (
    <ModalContext.Provider value={{ openDemoModal, openSalesModal, openApplyModal, openRecruitmentModal, openVideoModal, closeModal }}>
      {children}
      
      <Modal 
        isOpen={activeModal === 'demo'} 
        onClose={closeModal} 
        title="Request a Demo"
      >
        <DemoForm />
      </Modal>

      <Modal 
        isOpen={activeModal === 'sales'} 
        onClose={closeModal} 
        title="Contact Enterprise Sales"
      >
        <SalesForm />
      </Modal>

      <Modal 
        isOpen={activeModal === 'apply'} 
        onClose={closeModal} 
        title="Apply to GOQii"
      >
        <ApplicationForm />
      </Modal>

      <Modal 
        isOpen={activeModal === 'recruitment'} 
        onClose={closeModal} 
        title="Contact Recruitment Team"
      >
        <RecruitmentForm />
      </Modal>

      <Modal 
        isOpen={activeModal === 'video'} 
        onClose={closeModal} 
        title={videoData?.title || "Case Study Video"}
        maxWidth="max-w-4xl"
      >
        {videoData && (
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black">
            <iframe
              src={`${getEmbedUrl(videoData.url)}?autoplay=1`}
              title={videoData.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </Modal>
    </ModalContext.Provider>
  );
};

export const useModals = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModals must be used within a ModalProvider');
  }
  return context;
};
