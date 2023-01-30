import Title from "./components/Ttile";

export default {
  title: "Practice/Title",
  component: Title,
  argTypes: {
    title: { control: "text" },
    textColor: { control: "text" },
  },
};

const Template = (args) => <Title {...args} />;

export const RedTitle = Template.bind({});
RedTitle.args = {
  title: "Red Title",
  textColor: "red",
};

export const BlueTitle = Template.bind({});

// 스토리의 전달인자를 작성해줍니다.
BlueTitle.args = {
  title: "Blue Title",
  textColor: "blue",
};

export const StorybookTitle = (args) => {
  return <Title {...args} />;
};
