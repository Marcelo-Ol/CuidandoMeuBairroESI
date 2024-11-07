import { shallowMount } from "@vue/test-utils";
import StyledSelect from "@/components/StyledSelect.vue";

describe("StyledSelect.vue", () => {
  it('deve mostrar o valor exibido corretamente com base na propriedade "value"', () => {
    const options = [
      { key: 1, value: "Option 1" },
      { key: 2, value: "Option 2" },
    ];
    const wrapper = shallowMount(StyledSelect, {
      propsData: {
        options,
        value: 1,
      },
    });

    expect(wrapper.text()).toContain("Option 1");
  });

  it("deve abrir e fechar a lista ao clicar no botão", async () => {
    const options = [
      { key: 1, value: "Option 1" },
      { key: 2, value: "Option 2" },
    ];
    const wrapper = shallowMount(StyledSelect, {
      propsData: {
        options,
      },
    });

    expect(wrapper.find("ul").exists()).toBe(false);

    await wrapper.find("button").trigger("click");

    expect(wrapper.find("ul").exists()).toBe(true);

    await wrapper.find("button").trigger("click");

    expect(wrapper.find("ul").exists()).toBe(false);
  });
});
