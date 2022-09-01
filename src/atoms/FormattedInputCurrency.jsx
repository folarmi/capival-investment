import { useForm, Controller } from "react-hook-form";
import CurrencyFormat from "react-currency-format";

export default function FormattedInputCurrency({
  defaultValue,
  register,
  label,
  name,
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <>
        <label htmlFor={name} className={`text-sm font-normal text-blueTwo`}>
          {label}
        </label>
        <div className="border border-blueTwo/50 rounded-[20px] w-full py-3.5 placeholder-blueThree text-sm pl-[10px] text-blueTwo bg-blueTwo/20">
          <Controller
            control={control}
            name={name}
            defaultValue=""
            // {...register}
            render={({ field: { onChange, ref, name, value } }) => (
              <div>
                <CurrencyFormat
                  style={{
                    backgroundColor: "3B58A8",
                  }}
                  displayType={"input"}
                  thousandSeparator={true}
                  name={name}
                  value={value}
                  prefix={"₦"}
                  onChange={onChange}
                />
              </div>
            )}
          />
        </div>
      </>
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
