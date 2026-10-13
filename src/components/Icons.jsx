import FlightTakeoffOutlined from '@mui/icons-material/FlightTakeoffOutlined';
import HotelOutlined from '@mui/icons-material/HotelOutlined';
import ShieldOutlined from '@mui/icons-material/ShieldOutlined';
import LuggageOutlined from '@mui/icons-material/LuggageOutlined';
import AssignmentOutlined from '@mui/icons-material/AssignmentOutlined';
import SupportAgentOutlined from '@mui/icons-material/SupportAgentOutlined';
import PaymentsOutlined from '@mui/icons-material/PaymentsOutlined';
import PublicOutlined from '@mui/icons-material/PublicOutlined';
import WorkOutline from '@mui/icons-material/WorkOutlined';
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined';
import BusinessOutlined from '@mui/icons-material/BusinessOutlined';
import VerifiedOutlined from '@mui/icons-material/VerifiedOutlined';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutlined';
export { default as ArrowUpRight } from '@mui/icons-material/NorthEast';
export { default as WhatsAppIcon } from '@mui/icons-material/WhatsApp';
export { default as Menu } from '@mui/icons-material/Menu';
export { default as Close } from '@mui/icons-material/Close';
export { default as ExpandMore } from '@mui/icons-material/ExpandMore';
export { default as HelpOutline } from '@mui/icons-material/HelpOutlined';
export { FlightTakeoffOutlined as FlightIcon };
export function ContentIcon({ text = '', ...props }) {
  let Icon = CheckCircleOutline;
  if (/polonia|laboral|trabaj|oportunidad/i.test(text)) Icon = WorkOutline;
  else if (/pasaje|vuelo|viaj/i.test(text)) Icon = FlightTakeoffOutlined;
  else if (/alojamiento|hotel/i.test(text)) Icon = HotelOutlined;
  else if (/seguro/i.test(text)) Icon = ShieldOutlined;
  else if (/equipaje/i.test(text)) Icon = LuggageOutlined;
  else if (/requisito|document|postula/i.test(text)) Icon = AssignmentOutlined;
  else if (/pago|cuota|planific/i.test(text)) Icon = PaymentsOutlined;
  else if (/atención|acompaña|asesor|contact|empezá/i.test(text)) Icon = SupportAgentOutlined;
  else if (/oficina/i.test(text)) Icon = BusinessOutlined;
  else if (/historia|experiencia|respaldo/i.test(text)) Icon = VerifiedOutlined;
  else if (/internacional|mundo|destino/i.test(text)) Icon = PublicOutlined;
  else if (/españa|italia|brasil|argentina|méxico|dominicana|estados/i.test(text)) Icon = LocationOnOutlined;
  return <Icon aria-hidden="true" {...props} />;
}

