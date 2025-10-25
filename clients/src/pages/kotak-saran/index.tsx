import { BigTitleLayout } from "@/layouts";
import { Services } from "@/services";
import type { TCreateKotakSaranParams } from "@/services/kotak-saran";
import { useMutation } from "@tanstack/react-query";
import { Button, Checkbox, Form, Input, notification, Select } from "antd";

const KotakSaranPage = () => {
  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: (params: TCreateKotakSaranParams) =>
      Services.createKotakSaran(params),
    onSuccess: () => {
      api.success({
        message: "Saran telah terkirim!",
        description:
          "Saran kamu telah terekam ke dalam sistem. Terima kasih atas kritik dan saran anda! Semoga kami dapat menjadi lebih baik lagi ke depannya!",
      });
      form.resetFields();
    },
    onError: () => {
      api.error({
        message: "Saran tidak berhasil terkirim!",
        description: "Silakan coba beberapa menit lagi!",
      });
    },
  });

  const tujuanList = ["Guru", "Staf Tata Usaha", "Caraka", "Sekolah"].map(
    (data) => ({ label: data, value: data })
  );

  return (
    <BigTitleLayout title="KOTAK SARAN">
      {contextHolder}
      <div className="xl:max-w-240 m-auto pb-32 px-4 md:px-8 lg:px-32">
        <Form
          form={form}
          layout="vertical"
          onFinish={(data) => {
            mutate({
              nama: !data.anonim ? data.nama : undefined,
              tujuan: data.tujuan,
              saran: data.saran,
            });
          }}
        >
          <Form.Item dependencies={["anonim"]} noStyle>
            {({ getFieldValue }) => {
              return (
                !getFieldValue("anonim") && (
                  <Form.Item label="Nama" name="nama">
                    <Input />
                  </Form.Item>
                )
              );
            }}
          </Form.Item>
          <Form.Item name="anonim" valuePropName="checked">
            <Checkbox>Saya tidak ingin menampilkan nama saya</Checkbox>
          </Form.Item>
          <Form.Item label="Tujuan Kotak Saran" name="tujuan">
            <Select options={tujuanList} />
          </Form.Item>
          <Form.Item label="Saran" name="saran">
            <Input.TextArea rows={4} />
          </Form.Item>
          <Button htmlType="submit" type="primary" loading={isPending}>
            {isPending ? "Mengirim..." : "Kirim Saran"}
          </Button>
        </Form>
      </div>
    </BigTitleLayout>
  );
};

export default KotakSaranPage;
