import { Field, InputType } from "@nestjs/graphql";

@InputType("NullableStringFieldUpdateOperationsInput", {
  isAbstract: true
})
export class NullableStringFieldUpdateOperationsInput {
  @Field(() => String, {
    nullable: true
  })
  set?: string | undefined;
}
