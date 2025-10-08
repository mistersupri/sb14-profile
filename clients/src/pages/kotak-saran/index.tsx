import { BigTitleLayout } from "@/layouts";
import { Button, Checkbox, Form, Input } from "antd";

const KotakSaranPage = () => {
  const [form] = Form.useForm();

  return (
    <BigTitleLayout title="KOTAK SARAN">
      <div className="xl:max-w-240 m-auto pb-32 px-4 md:px-8 lg:px-32">
        <Form form={form} layout="vertical">
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
            <Input />
          </Form.Item>
          <Form.Item label="Saran" name="saran">
            <Input.TextArea rows={4} />
          </Form.Item>
          <Button type="primary">Kirim Saran</Button>
        </Form>
      </div>
    </BigTitleLayout>
  );
};

export default KotakSaranPage;
