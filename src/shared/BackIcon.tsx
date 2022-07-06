import { defineComponent, PropType } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Icon } from './Icon';
export const BackIcon = defineComponent({
  setup: (props, context) => {
    const route = useRoute();
    const router = useRouter();
    const onClick = () => {
      const { return_to } = route.query;
      if (return_to) {
        router.push(return_to.toString());
      } else {
        router.back();
      }
    };
    return () => <Icon name="left" onClick={onClick} />;
  },
});
