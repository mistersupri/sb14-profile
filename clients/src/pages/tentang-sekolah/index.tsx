import { MainLayout } from "@/layouts";
import { Carousel, Image } from "antd";
import classNames from "classnames";
import { useMemo, useState } from "react";

const TentangSekolahPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const imageList = [
    `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
    `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
    `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
    `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
    `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
    `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
    `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
    `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
  ];

  const facilities = [
    {
      label: "LAPANGAN",
      url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
    },
    {
      label: "KANTIN",
      url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
    },
    {
      label: "RUANG LAB",
      url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
    },
    {
      label: "UKS",
      url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
    },
    {
      label: "PERPUSTAKAAN",
      url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
    },
    {
      label: "TAMAN",
      url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
    },
  ];

  const teacherList = useMemo(
    () => [
      {
        nama: "test",
        peran: "guru",
        url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
      },
      {
        nama: "test",
        peran: "guru",
        url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
      },
      {
        nama: "test",
        peran: "guru",
        url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
      },
      {
        nama: "test",
        peran: "guru",
        url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
      },
      {
        nama: "test",
        peran: "guru",
        url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
      },
      {
        nama: "test",
        peran: "guru",
        url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
      },
      {
        nama: "test",
        peran: "guru",
        url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
      },
      {
        nama: "test",
        peran: "guru",
        url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
      },
      {
        nama: "test",
        peran: "guru",
        url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
      },
      {
        nama: "test",
        peran: "guru",
        url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
      },
      {
        nama: "test",
        peran: "guru",
        url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
      },
      {
        nama: "test",
        peran: "guru",
        url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
      },
      {
        nama: "test",
        peran: "guru",
        url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
      },
      {
        nama: "test",
        peran: "guru",
        url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${Date.now()}`,
      },
    ],
    []
  );

  const formattedTeacherList = useMemo(() => {
    const result = [];
    for (let i = 0; i < teacherList.length; i += 10) {
      result.push(teacherList.slice(i, i + 10));
    }
    return result;
  }, [teacherList]);

  return (
    <MainLayout>
      <div className="xl:max-w-380 m-auto py-32 px-4 md:px-8 lg:px-32 grid grid-cols-2 gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold">SDN Sumur Batu 14</h2>
            <div className="flex gap-2 items-center">
              <p className="italic">NPSN : 20104695</p>
              <p>-</p>
              <p>Akreditasi</p>
              <div className="w-6 h-6 rounded bg-green-500 flex items-center justify-center font-bold">
                A
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-2xl font-bold">Visi</h4>
            <p>
              Terwujudnya murid yang cerdas, berakhlak mulia, unggul dalam
              literasi, dan peduli lingkungan melalui penerapan pembelajaran
              mendalam dalam suasana ramah anak.
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-2xl font-bold">Misi</h4>
            <p>
              1. Menerapkan pembelajaran mendalam dengan pendekatan berbasis
              teknologi dan pengalaman langsung. 2. Melaksanakan program
              pengembangan literasi secara sistematis dan berkelanjutan.
              Membentuk peserta didik berakhlak mulia dan berbudi pekerti luhur
              melalui pembelajaran dan pembiasaan di sekolah. Menanamkan sikap
              gotong royong dan kepedulian terhadap lingkungan. Mengembangkan
              kemandirian, bernalar kritis, dan kreativitas peserta didik.
              Menciptakan lingkungan belajar yang aman, nyaman, dan mendukung
              tumbuh kembang optimal peserta didik. Menumbuhkan sikap kompetitif
              dalam meraih prestasi akademik maupun non-akademik.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            height={320}
            className="object-cover rounded-xl"
            width="100%"
            src={imageList[selectedImage]}
            placeholder={
              <Image
                preview={false}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                width="100%"
                height={320}
                className="object-cover rounded-xl"
              />
            }
          />
          <div className="w-full overflow-x-auto">
            <div className="flex gap-2">
              {imageList.map((item, index) => (
                <div
                  className={classNames([
                    "rounded-xl min-w-24 h-24 overflow-hidden cursor-pointer relative",
                    "after:w-full after:h-full after:absolute after:left-0 after:top-0 hover:after:bg-black/50",
                    selectedImage === index && "border-4 after:bg-black/50",
                  ])}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    height="100%"
                    preview={false}
                    className="object-cover"
                    width="100%"
                    src={item}
                    placeholder={
                      <Image
                        preview={false}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                        width="100%"
                        height="100%"
                        className="object-cover"
                      />
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 w-full py-32 px-4 md:px-8 lg:px-32 flex flex-col gap-16">
        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold">Sambutan Kepala Sekolah</h2>
            <div className="flex gap-2 items-center">
              <p className="italic">Kuswinarti, M.Pd.</p>
            </div>
            <p>
              Assalamu’alaikum warahmatullahi wabarakatuh, Selamat datang di
              website resmi sekolah kami. Kehadiran website ini merupakan
              langkah nyata dalam memanfaatkan teknologi informasi sebagai
              sarana komunikasi dan informasi bagi seluruh warga sekolah, orang
              tua, maupun masyarakat luas. Melalui website ini, kami berharap
              seluruh kegiatan, prestasi, pengumuman, dan program sekolah dapat
              tersampaikan dengan cepat, transparan, serta dapat diakses kapan
              saja. Semoga website ini menjadi media yang bermanfaat dalam
              mendukung proses pendidikan dan mempererat hubungan antara sekolah
              dan masyarakat. Wassalamu’alaikum warahmatullahi wabarakatuh.
            </p>
          </div>

          <div>
            <Image
              height={320}
              className="object-cover rounded-xl"
              width="100%"
              src={imageList[selectedImage]}
              placeholder={
                <Image
                  preview={false}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                  width="100%"
                  height={320}
                  className="object-cover rounded-xl"
                />
              }
            />
          </div>
        </div>

        <Carousel
          arrows
          autoplay={{ dotDuration: true }}
          className="[&_.slick-arrow]:opacity-100! [&_.slick-arrow]:shadow-lg! [&_.slick-arrow]:text-black! [&_.slick-arrow]:bg-white! [&_.slick-arrow]:w-8! [&_.slick-arrow]:h-8! [&_.slick-arrow]:rounded-full [&_.slick-arrow]:flex! [&_.slick-arrow]:items-center! [&_.slick-arrow]:justify-center! [&_.slick-arrow]:after:static! [&_.slick-arrow.slick-next]:after:-ml-1 [&_.slick-arrow.slick-prev]:after:-mr-1"
        >
          {formattedTeacherList.map((list) => (
            <div>
              <div className="grid grid-cols-5 gap-4">
                {list.map((item) => (
                  <div className="flex flex-col gap-4">
                    <div
                      className={classNames([
                        "rounded-xl min-w-24 h-54 overflow-hidden cursor-pointer relative",
                        "after:w-full after:h-full after:absolute after:left-0 after:top-0 hover:after:bg-black/50",
                      ])}
                    >
                      <Image
                        height="100%"
                        preview={false}
                        className="object-cover"
                        width="100%"
                        src={item.url}
                        placeholder={
                          <Image
                            preview={false}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                            width="100%"
                            height="100%"
                            className="object-cover"
                          />
                        }
                      />
                    </div>
                    <div>
                      <p>Wakil Kepala Sekolah</p>
                      <p className="font-bold">Susilowati, S.Pd.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="xl:max-w-380 m-auto py-32 px-4 md:px-8 lg:px-32 grid grid-cols-2 gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Sejarah SDN Sumur Batu 14</h2>
          <p className="text-justify">
            SD Negeri Sumur Batu 14 berdiri sejak tahun 1978 dan telah menjadi
            bagian penting masyarakat Jakarta Pusat, khususnya wilayah
            Kemayoran. Berlokasi di Jalan Nilam Raya No. 6, Kelurahan Sumur
            Batu, sekolah ini memberikan layanan pendidikan dasar yang
            berkualitas. Letaknya strategis, dekat dengan berbagai fasilitas
            vital seperti Kantor Kelurahan, Pengadilan Tinggi DKI Jakarta,
            pasar, pusat perbelanjaan ITC Cempaka Mas, rumah sakit, taman kota,
            dan bank.
          </p>
        </div>
        <Image
          height={320}
          className="object-cover rounded-xl"
          width="100%"
          preview={false}
          src={imageList[selectedImage]}
          placeholder={
            <Image
              preview={false}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
              width="100%"
              height={320}
              className="object-cover rounded-xl"
            />
          }
        />
      </div>

      <div className="grid grid-cols-3 xl:max-w-380 m-auto">
        {facilities.map((item) => (
          <div className="relative">
            <p className="absolute top-1/2 left-1/2 -translate-1/2 z-20 md:text-xl lg:text-2xl text-center text-white font-bold">
              {item.label}
            </p>
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-70" />
            <Image
              width="100%"
              height="100%"
              src={item.url}
              preview={false}
              placeholder={
                <Image
                  preview={false}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                  width="100%"
                  height="100%"
                />
              }
            />
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TentangSekolahPage;
