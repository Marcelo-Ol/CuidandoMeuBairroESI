import { shallowMount } from "@vue/test-utils";
import ButtonSpinner from "@/components/ButtonSpinner.vue";

describe("ButtonSpinner.vue", () => {
  it('deve mostrar o spinner quando "condition" for verdadeira', () => {
    const wrapper = shallowMount(ButtonSpinner, {
      propsData: {
        condition: true,
      },
    });

    expect(wrapper.find("spinner-anim").exists()).toBe(true);

    expect(wrapper.find("span").classes()).toContain("transparent");
  });

  it('não deve mostrar o spinner quando "condition" for false', () => {
    const wrapper = shallowMount(ButtonSpinner, {
      propsData: {
        condition: false,
      },
    });

    expect(wrapper.find("spinner-anim").exists()).toBe(false);

    expect(wrapper.find("span").classes()).not.toContain("transparent");
  });

  it('deve desabilitar o botão quando "disabled" for verdadeiro', () => {
    const wrapper = shallowMount(ButtonSpinner, {
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.find("button").attributes("disabled")).toBe("disabled");
  });

  it('deve desabilitar o botão quando "condition" for verdadeira', () => {
    const wrapper = shallowMount(ButtonSpinner, {
      propsData: {
        condition: true,
      },
    });

    expect(wrapper.find("button").attributes("disabled")).toBe("disabled");
  });

  it('não deve desabilitar o botão quando "disabled" for false e "condition" for false', () => {
    const wrapper = shallowMount(ButtonSpinner, {
      propsData: {
        disabled: false,
        condition: false,
      },
    });

    expect(wrapper.find("button").attributes("disabled")).toBeUndefined();
  });

  it('deve exibir o texto do slot quando "condition" for false', () => {
    const wrapper = shallowMount(ButtonSpinner, {
      propsData: {
        condition: false,
      },
      slots: {
        default: "Texto do botão",
      },
    });

    expect(wrapper.text()).toContain("Texto do botão");
  });
});
