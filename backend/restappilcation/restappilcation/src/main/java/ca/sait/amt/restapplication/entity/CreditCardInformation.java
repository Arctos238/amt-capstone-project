package ca.sait.amt.restapplication.entity;

import static jakarta.persistence.GenerationType.IDENTITY;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="credit_card_information", catalog = "amt")
public class CreditCardInformation {
	private int creditCardInformationId;
	private String nameOnCard;
	private String creditCardNumber;
	private String expiryDate;
	private int cvs;
	private String creditCardType;
	private DepositForm depositForm;
	
	public CreditCardInformation() {
		
	}
	
	public CreditCardInformation(String creditCardNumber, String expiryDate, int cvs, String creditCardType,
			DepositForm depositForm) {
		super();
		this.creditCardNumber = creditCardNumber;
		this.expiryDate = expiryDate;
		this.cvs = cvs;
		this.creditCardType = creditCardType;
		this.depositForm = depositForm;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "credit_card_information_id", unique = true, nullable = false)
	public int getCreditCardInformationId() {
		return creditCardInformationId;
	}

	public void setCreditCardInformationId(int creditCardInformationId) {
		this.creditCardInformationId = creditCardInformationId;
	}

	@Column(name="name_on_card")
	public String getNameOnCard() {
		return nameOnCard;
	}

	public void setNameOnCard(String nameOnCard) {
		this.nameOnCard = nameOnCard;
	}

	@Column(name="credit_card_number")
	public String getCreditCardNumber() {
		return creditCardNumber;
	}

	public void setCreditCardNumber(String creditCardNumber) {
		this.creditCardNumber = creditCardNumber;
	}

	@Column(name="expiry_date")
	public String getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(String expiryDate) {
		this.expiryDate = expiryDate;
	}

	@Column(name="cvs")
	public int getCvs() {
		return cvs;
	}

	public void setCvs(int cvs) {
		this.cvs = cvs;
	}
	
	@Column(name="credit_card_type")
	public String getCreditCardType() {
		return creditCardType;
	}

	public void setCreditCardType(String creditCardType) {
		this.creditCardType = creditCardType;
	}

	@OneToOne(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
	@JsonBackReference
	@JoinColumn(name = "deposit_form_id")
	public DepositForm getDepositForm() {
		return depositForm;
	}
	
	public void setDepositForm(DepositForm depositForm) {
		this.depositForm = depositForm;
	}

}
